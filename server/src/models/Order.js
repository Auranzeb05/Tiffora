const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
  {
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    mealDate: { type: Date, required: true },
    status: {
      type: String,
      enum: ['active', 'cancelled', 'fulfilled'],
      default: 'active',
      required: true
    },
    deliveryAddress: {
      pincode: { type: String, required: true },
      sector: { type: String, required: true },
      line1: { type: String, required: true }
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Order', orderSchema);
