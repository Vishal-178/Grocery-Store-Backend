const mongoose = require("mongoose");
// schema for orders
const connectSchema = new mongoose.Schema(
  {
    productCategory: {
      type: String,
      required: true,
    },
    productInfo: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantityAvailable: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", connectSchema);
module.exports = Product;
