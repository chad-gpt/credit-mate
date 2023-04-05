const mongoose = require("mongoose");
const offerSchema = mongoose.Schema({
  image: String,
  company: { type: mongoose.Schema.Types.ObjectId, ref: "companies" },
  time: Date,
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active",
  },
  offer: Number,
});
const offers = mongoose.model("offers", offerSchema);
