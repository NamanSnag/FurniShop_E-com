const User = require("../model/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res, next) => {
  try {
    const { name, email, password, phone, address } = req.body;

    // Check if user already exists
    const isUser = await User.findOne({ email: email });
    if (isUser) {
      return res.status(409).json({ message: "User already exists" });
    }
    // Create user
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      name: name,
      email: email,
      password: hashedPassword,
      phone: phone,
      address: address,
    });

    await user.save();

    return res.status(201).json({
      message: "User registered successfully",
    });
  } catch (error) {
    next(error);
  }
};

const loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    // checking if the user is registered or not
    const user = await User.findOne({ email: email });

    if (!user)
      return res.status(404).json({
        message: "User not found, Registre first",
      });

      // Check if the password is correct
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(400).json({ message: 'Email or password is incorrect' });
    }

    const token = jwt.sign({ id: user._id, isAdmin : user.isAdmin }, process.env.JWT_SECRET);

    return res.cookie("token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({
        msg: "logIn sucessfully",
        details: { ...user._doc, password: "_" },
      });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  registerUser,
  loginUser,
};
