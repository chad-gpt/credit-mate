const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
  },
  {
    timestamps: true,
  },
  {
    collection: "users",
  }
);

const User =  mongoose.model("users", userSchema);

module.exports = { User };
