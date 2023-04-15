const Product = require('../model/products');

// add new product
const addProduct = async (req, res, next) => {
  try {
    const { name, description, category, price, image } = req.body;

    const product = new Product({
      name,
      description,
      category,
      price,
      image,
    });

    await product.save();
    return res.status(201).json({
        product: product,
        messege: "New product added successfully"
    });
  } catch (err) {
    next(err);
  }
};

// get all products
const getProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    return  res.status(200).json(products);
  } catch (err) {
    next(err);
  }
}

// update product by id
const updateProduct = async (req, res, next) => {
  try {
    const { name, description, category, price, image } = req.body;
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ msg: 'Product not found' });
    }
    product.name = name || product.name;
    product.description = description || product.description;
    product.category = category || product.category;
    product.price = price || product.price;
    product.image = image || product.image;
    await product.save();
    return res.status(201).json({
      message: 'Product update successfully'
    });
  } catch (err) {
    next(err);
  }
}

// delete product by id
const deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ msg: 'Product not found' });
    }
    await product.deleteOne();
    return res.status(201).json({ msg: 'Product removed' });
  } catch (err) {
    next(err);
  }
}


module.exports = {
    addProduct,
    getProducts,
    updateProduct,
    deleteProduct
}
