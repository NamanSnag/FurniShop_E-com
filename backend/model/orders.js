const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
      },
      quantity: {
        type: Number,
        required: true
      },
      price: {
        type: Number,
        required: true
      },
      image : {
        type: String,
        required: true
      }
    }
  ],
  status: {
    type: String,
    enum: ['placed', 'shipped', 'delivered'],
    default: 'placed'
  },
  total: {
    type: Number,
    required: true
  }
},{
  timestamps: true
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;