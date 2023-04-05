const express = require("express");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const argon2 = require("argon2");
const User = require("./models/user");
const MongoClient = require("mongodb").MongoClient;
// const { redis } = require("./utils/redis");
// const { initializeApp } = require("firebase-admin/app");
// const admin = require("firebase-admin");

// var serviceAccount = require("./firebase"); //service account for firebase
dotenv.config(); //configuring the environment variabels

const PORT = process.env.PORT || 8000;
const corsOptions = {
  // CORS configuration set to allow from anywhere
  origin: "*",
};

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors(corsOptions));

//  All the routes here
// app.use("/api/auth/v1/", auth); //authentication routes
// app.use("/api/events/v1", event); //event routes
// app.use("/api/user/v1", user); //user routes
app.use("/api/health", (req, res, next) => {
  res.status(200).send("Hello from Oculus Tech Team");
});

app.post("/api/signup", async (req, res, next) => {
  try {
    console.log(User);

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
    res.status(500).send("Internal Server Error");
  }
});

//start server
app.listen(PORT, async () => {
  try {
    //     initializeApp({
    //       credential: admin.credential.cert(serviceAccount), //initialize the firebase app;
    //     });
    //     await redis.connect(); // establishing connection with redis cluster
 
    mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error:"));
    db.once("open", () => {
      console.log("Connected to MongoDB!");
    });
    console.log(`Server is running on port ${PORT}`);
  } catch (error) {
    console.error(error);
  }
});
