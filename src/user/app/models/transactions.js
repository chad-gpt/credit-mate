const mongoose = require("mongoose");

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 19e2459 (somethin)
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
<<<<<<< HEAD
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
=======
>>>>>>> 19e2459 (somethin)
  },
  { strict: false }
);

const Transaction =
<<<<<<< HEAD
  mongoose.model("Transaction") ||
>>>>>>> 843160c (somethin)
=======
  mongoose.models.Transaction ||
>>>>>>> 19e2459 (somethin)
  mongoose.model("Transaction", transactionSchema);

module.exports = { Transaction };
