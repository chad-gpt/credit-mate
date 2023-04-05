const express = require("express");
const router = express.Router();
const passport = require("../strategy");
<<<<<<< HEAD
const { Transaction } = require("../models/transactions");
<<<<<<< HEAD
const User = require("../models/user");
=======
=======
const Transaction = require("../models/transactions");
>>>>>>> 843160c (somethin)
>>>>>>> 17fa681 (somethin)
router.get(
  "/",
  // passport.authenticate("user", { session: false }),
  async (req, res, next) => {
    try {
      // console.log(req.);
<<<<<<< HEAD
      const transactionsList = await Transaction.find({});
      return res.status(200).json(transactionsList);
=======
      const transactions = await Transaction.find();
      return res.status(200).json(transactions);
>>>>>>> 843160c (somethin)
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: error.message });
    }
  }
);

<<<<<<< HEAD
router.post("/", async (req, res, next) => {
  try {
    const {
      user_id,
      transactionDate,
      transactionType,
      amount,
      paymentCompany,
      product,
    } = req.body;
    const newTransaction = await new Transaction({
      user_id,
      transactionDate,
      amount,
      paymentCompany,
      transactionType,
      product,
    });
    newTransaction.save();
    User.findOneAndUpdate({ _id: user_id }, { $inc: { coins: amount * 0.1 } });
    return res.send({ newTransaction });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server Error" });
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    res.status(200).send(transaction);
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Internal Server Error" });
  }
});
router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { user_id, transactionDate, amount, paymentCompany, product } =
      req.body;
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server Error" });
  }
});
=======
router.post(
  "/",
  passport.authenticate("user", { session: false }),
  async (req, res, next) => {
    try {
      const {} = req.body;
      // console.log(req.user);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: error.message });
    }
  }
);
router.get("/:id", async (req, res, next) => {
  try {
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
});

>>>>>>> 843160c (somethin)
module.exports = router;
