const express = require("express");
const router = express.Router();
const User = require("../models/user");
const coupons = require("../models/coupons");
router.get("/", async (req, res, next) => {
  try {
    const coupons= await coupons.find({});
    return res.status(200).json(coupons);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
});
router.post("/", async (req, res, next) => {
    try {
        const { code, discount, expiryDate } = req.body;
        const newCoupon = await new coupons({
        code,
        discount,
        expiryDate,
        });
        newCoupon.save();
        return res.send({ newCoupon });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server Error" });
    }
    }
    

