const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Interests = new mongoose.Schema({
  value: {
    type: String,
    enum: [
      "Hotel",
      "Utility",
      "Grocery",
      "Food",
      "Shopping",
      "Travel",
      "Gaming",
      "Movies",
      "Health",
    ],
  },
});
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  interests: {
    type: [Interests],
  },
});

userSchema.methods.generateAuthToken = (data) => {
  const token = jwt.sign({ _id: data._id }, process.env.JWTPRIVATEKEY, {
    expiresIn: "7d", //token expires in 7 days.
  });
  return token;
};


module.exports = mongoose.models.User || mongoose.model("User", userSchema);
