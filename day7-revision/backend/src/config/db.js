import mongoose from "mongoose";
import config from "../config/config.js";
export async function connectToDB() {
  try {
    await mongoose.connect(config.MONGO_URI);
    console.log("Mongodb is connected");
  } catch (error) {
    console.log("Mongodb connected error", error);
    res.status(400).json({
      success: false,
      message: "Mongodb connected error",
    });
  }
}
