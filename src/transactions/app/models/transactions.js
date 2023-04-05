const mongoose = require("mongoose");

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
<<<<<<< HEAD
=======
  transactionType: {
    type: String,
  },
>>>>>>> 843160c (somethin)
  paymentCompany: String,
  product: String,
});

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = { Transaction };
