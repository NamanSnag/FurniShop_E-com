const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const token = req.cookies.token;

    if(!token) return res.status(401).json({
        succcess: false,
        message: "You are not authenticated",
    });

    jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
        if(err) return res.status(401).json({
            succcess: false,
            message: "Token is invalid"
        });
        req.user = data;
        next();
    });
}

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not alowed to do that!");
    }
  });
};

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not alowed to do that!");
    }
  });
};

module.exports = {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
};
