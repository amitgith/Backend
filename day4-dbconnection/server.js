const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = 3000;

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("mongodb connected");
  } catch (error) {
    console.log("error while connecting db", error);
  }
};

connectDb();

app.get("/", (req, res) => {
  res.send("Ok get it");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});