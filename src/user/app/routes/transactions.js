const express = require("express");
const router = express.Router();
const passport = require("../strategy");
const Transaction = require("../models/transactions");
router.get(
  "/",
  // passport.authenticate("user", { session: false }),
  async (req, res, next) => {
    try {
      // console.log(req.);
      const transactions = await Transaction.find();
      return res.status(200).json(transactions);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: error.message });
    }
  }
);

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

module.exports = router;
