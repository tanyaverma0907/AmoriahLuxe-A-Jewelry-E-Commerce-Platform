const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

    orderItems: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        qty: Number,
        price: Number,
      },
    ],

    shippingAddress: {
      address: String,
      city: String,
      postalCode: String,
      country: String,
    },

    totalPrice: Number,
    isPaid: { type: Boolean, default: false },
    isDelivered: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);