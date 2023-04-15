const express = require('express');
const { addProduct, getProducts, updateProduct, deleteProduct } = require('../controller/product_controller');
const { verifyTokenAndAdmin, verifyToken } = require('../utills/jwt');
const router = express.Router();

// add product products
router.post('/add', verifyTokenAndAdmin ,addProduct);

// get all products
router.get('/get', getProducts);

// update product
router.put('/:id', verifyTokenAndAdmin, updateProduct);

// delete product
router.delete('/:id', verifyTokenAndAdmin, deleteProduct);
  



module.exports = router;