const mongoose = require("mongoose");
const offerSchema = mongoose.Schema({
  image: String,
  company: String,
  timeStart: Date,
  timeEnd: Date,
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active",
  },
  tag: String,
  offer: Number,
});
const offers = mongoose.model("offers", offerSchema);

module.exports = offers;
