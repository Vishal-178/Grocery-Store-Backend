const mongoose = require("mongoose");
// schema for orders
const connectSchema = new mongoose.Schema(
  {
    productList: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
    totalPrice: {
      type: Number,
      required: true,
    },
    paymentInfo: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", connectSchema);
module.exports = Order;
