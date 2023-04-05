const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
<<<<<<< HEAD
const transactionsRoutes = require("./routes/transactions");

=======
>>>>>>> 843160c (somethin)

dotenv.config();
const PORT = process.env.PORT || 8000;
const corsOptions = {
  origin: "*",
};

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors(corsOptions));

<<<<<<< HEAD
app.use("/api/transactions", transactionsRoutes);
=======
app.use("/api", );
>>>>>>> 843160c (somethin)

app.get("/", (req, res, next) => {
  res.send("Alive");
});

app.listen(PORT, async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URL,
      { useNewUrlParser: true },
      () => console.log(`Server running at port ${PORT}`)
    );
  } catch (error) {
    console.error(error);
  }
});
