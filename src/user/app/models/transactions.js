const mongoose = require("mongoose");

<<<<<<< HEAD
const transactionSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    transactionDate: {
      type: Date,
      default: Date.now,
    },
    amount: {
      type: Number,
      required: true,
    },
    transactionType: {
      type: String,
    },
    paymentCompany: String,
    product: String,
  },
  { strict: false }
);

const Transaction =
  mongoose.models.Transaction ||
=======
const transactionSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  transactionDate: {
    type: Date,
    default: Date.now,
  },
  amount: {
    type: Number,
    required: true,
  },
  transactionType: {
    type: String,
  },
  paymentCompany: String,
  product: String,
});

const Transaction =
  mongoose.model("Transaction") ||
>>>>>>> 843160c (somethin)
  mongoose.model("Transaction", transactionSchema);

module.exports = { Transaction };
