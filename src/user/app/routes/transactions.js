const express = require("express");
const router = express.Router();
const passport = require("../strategy");
const { Transaction } = require("../models/transactions");
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const User = require("../models/user");
=======
=======
>>>>>>> 25e93f9 (Added stuff)
=======
const Transaction = require("../models/transactions");
>>>>>>> 843160c (somethin)
<<<<<<< HEAD
>>>>>>> 17fa681 (somethin)
=======
=======
const { Transaction } = require("../models/transactions");
>>>>>>> 19e2459 (somethin)
<<<<<<< HEAD
>>>>>>> d91fd28 (somethin)
=======
=======
const User = require("../models/user");
>>>>>>> ebab75d (Added stuff)
>>>>>>> 25e93f9 (Added stuff)
=======
const User = require("../models/user");
>>>>>>> 1ccf6ae (asdf)
router.get(
  "/",
  // passport.authenticate("user", { session: false }),
  async (req, res, next) => {
    try {
      // console.log(req.);
      const transactionsList = await Transaction.find({});
      return res.status(200).json(transactionsList);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: error.message });
    }
  }
);

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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    User.findOneAndUpdate({ _id: user_id }, { $inc: { coins: amount * 0.1 } });
=======
    user.findOneAndUpdate({ _id: user_id }, { $inc: { coins: amount * 0.1 } });
<<<<<<< HEAD
>>>>>>> d5f4360 (somethin)
=======
    user.findOneAndUpdate({ _id: user_id }, { $inc: { coins: amount * 0.1 } });
<<<<<<< HEAD
=======
    User.findOneAndUpdate({ _id: user_id }, { $inc: { coins: amount * 0.1 } });
>>>>>>> ebab75d (Added stuff)
>>>>>>> 25e93f9 (Added stuff)
=======
    User.findOneAndUpdate({ _id: user_id }, { $inc: { coins: amount * 0.1 } });
>>>>>>> 1ccf6ae (asdf)
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
router.get("/user/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const transactions = await Transaction.find({ user_id: id });
    res.status(200).send(transactions);
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = router;
