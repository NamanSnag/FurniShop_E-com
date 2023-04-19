const express = require("express");
const Order = require("../model/orders");
const Product = require("../model/products");
const { verifyTokenAndAdmin, verifyToken } = require("../utills/jwt");
const router = express.Router();

// order add
// Add product to order
router.post("/add", verifyTokenAndAdmin, async (req, res, next) => {
  try {
    const { userId, productId, quantity } = req.body;
    // Find product by ID
    const product = await Product.findById(productId);
    // Calculate total price
    const totalPrice = product.price * quantity;
    // Check if the user already has an order
    let order = await Order.findOne({ user: userId });

    if (order) {
      // Check if the product already exists in the order
      const productIndex = order.products.findIndex((p) =>
        p.product.equals(productId)
      );

      if (productIndex !== -1) {
        // Update the quantity and price of the existing product
        order.products[productIndex].quantity += quantity;
      } else {
        // Add the new product to the order
        order.products.push({
          product: productId,
          quantity: quantity,
        });
      }

      order.total += totalPrice;

      // Save updated order to database
      order = await order.save();

      return res.status(201).json(order);
    } else {
      // Create new order object
      const newOrder = new Order({
        user: userId,
        products: [
          {
            product: productId,
            quantity: quantity,
          },
        ],
        total: totalPrice,
      });

      // Save new order to database
      const savedOrder = await newOrder.save();

      return res.status(201).json(savedOrder);
    }
  } catch (err) {
    next(err);
  }
});

// get order as per user
router.get("/:userId", verifyToken ,async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const orders = await Order.find({ user: userId }).populate('products.product');

    if (!orders) {
      return res.status(404).json({ message: "No orders found" });
    }

    return res.status(200).json({ orders });
  } catch (err) {
    next(err);
  }
});


module.exports = router;
