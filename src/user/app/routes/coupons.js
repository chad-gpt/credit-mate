const express = require("express");
const router = express.Router();
const User = require("../models/user");
const coupons = require("../models/coupons");
router.get("/", async (req, res, next) => {
  try {
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
});
