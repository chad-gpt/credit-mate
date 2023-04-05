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
<<<<<<< HEAD
=======
  transactionType: {
    type: String,
  },
>>>>>>> 843160c (somethin)
=======
>>>>>>> 19e2459 (somethin)
  paymentCompany: String,
  product: String,
});

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = { Transaction };
