const express = require("express");
const router = express.Router();
const offers = require("../models/offers");
router.get("/offers", async (req, res, next) => {
  try {
    const offers = await offers.find({});
    return res.status.send({ offers });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server Error" });
  }
});
router.get("/offers/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const offer = await offers.findOne({ _id: id });
    return res.send({ offer });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server Error" });
  }
});

router.post("/offers", async (req, res, next) => {
  try {
    const { image, company, time, status, offer } = req.body;
    const newOffer = await new offers({
      image,
      company,
      time,
      status,
      offer,
    });
    newOffer.save();
    return res.send({ newOffer });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server Error" });
  }
});
router.put("/offers/:id", async (req, res) => {});
