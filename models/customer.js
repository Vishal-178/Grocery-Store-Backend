const mongoose = require("mongoose");
// schema for customer
const connectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: false,
    },
    phone: {
      type: Number,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    orders: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Orders",
    },
  },
  {
    timestamps: true,
  }
);

const Customer = mongoose.model("Customer", connectSchema);
module.exports = Customer;
