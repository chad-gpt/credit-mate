const express = require("express");
const router = express.Router();
<<<<<<< HEAD
<<<<<<< HEAD
const transactions = require("../models/transactions");

router.get("/", async (req, res, next) => {
  try {
    const Transactions = await transactions.find({});
    return res.status(200).send({ Offers });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server Error" });
  }
});
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const offer = await offers.findOne({ _id: id });
    return res.send({ offer });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server Error" });
=======
=======
const transactions = require("../models/transactions");
>>>>>>> 19e2459 (somethin)

router.get("/", async (req, res, next) => {
  try {
    const Transactions = await transactions.find({});
    return res.status(200).send({ Offers });
  } catch (error) {
    console.error(error);
<<<<<<< HEAD
    return res.status(500).json({ message: error.message });
>>>>>>> 843160c (somethin)
=======
    return res.status(500).json({ message: "Server Error" });
  }
});
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const offer = await offers.findOne({ _id: id });
    return res.send({ offer });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server Error" });
>>>>>>> 19e2459 (somethin)
  }
});

router.post("/", async (req, res, next) => {
  try {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 19e2459 (somethin)
    const { user_id, transactionDate, amount, paymentCompany, product } =
      req.body;
    const newTransaction = await new transactions({
      user_id,
      transactionDate,
      amount,
      paymentCompany,
      product,
    });
    newTransaction.save();
    return res.send({ newTransaction });
<<<<<<< HEAD
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server Error" });
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
module.exports = router;
=======
=======
>>>>>>> 19e2459 (somethin)
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server Error" });
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
<<<<<<< HEAD
>>>>>>> 843160c (somethin)
=======
module.exports = router;
>>>>>>> 19e2459 (somethin)
