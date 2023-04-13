const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    phone : {
      type: Number,
      required: true
    }
    ,
    address: {
      type: String,
      required: true
    },
    orders: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Order'
    }],
    isAdmin: {
      type: Boolean,
      default: false
    }
  });

const User = mongoose.model('User', UserSchema);

module.exports = User;