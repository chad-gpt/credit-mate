const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  interests: {
    type: [String],
  },
  coins: {
    type: Number,
    default: 0,
  },
});

userSchema.methods.generateAuthToken = (data) => {
  const token = jwt.sign({ _id: data._id }, process.env.JWTPRIVATEKEY, {
    expiresIn: "7d", //token expires in 7 days.
  });
  return token;
};

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

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = {
  User: mongoose.models.User || mongoose.model("User", userSchema),
  Transaction,
};
