const express = require("express");
const router = express.Router();
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

router.get("/", async (req, res, next) => {
  try {
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
>>>>>>> 843160c (somethin)
  }
});

router.post("/", async (req, res, next) => {
  try {
<<<<<<< HEAD
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
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
});
router.get("/:id", async (req, res, next) => {
  try {
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
});
>>>>>>> 843160c (somethin)
