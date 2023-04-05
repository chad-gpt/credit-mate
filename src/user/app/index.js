const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const User = require("./models/user");
const cors = require("cors");
const argon2 = require("argon2");
dotenv.config();
const PORT = process.env.PORT || 8000;
const corsOptions = {
  origin: "*",
};

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors(corsOptions));

app.post("/api/login", async (req, res, next) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
    });
    if (!user)
      return res.status(401).send({ message: "Invalid Email  or Password" });

    if (await argon2.verify(user.password, req.body.password)) {
      //   const token = user.generateAuthToken(); //jwt token
      user.password = undefined;
      return res.status(200).send({
        // token: "Bearer " + token,
        user,
        message: "Logged In Successfully",
      });
    } else {
      return res.status(401).send({ message: "Invalid Password" }); // password did not match
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Internal Server Error" });
  }
});
app.post("/api/signup", async (req, res, next) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
    });
    if (user)
      return res
        .status(409)
        .send({ message: "Admin with given Email already exists!" });
    const hashPassword = await argon2.hash(req.body.password);
    await new User({ ...req.body, password: hashPassword }).save();
    res.status(201).send({ message: "User Created successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

app.get("/", (req, res) => {
  res.send("Hallaluya");
});

app.listen(PORT, async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URL,
      { useNewUrlParser: true },
      () => console.log(`Server running at port ${PORT}`)
    );
  } catch (e) {
    console.log(e);
  }
});
