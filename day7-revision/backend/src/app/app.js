import express from "express";
import router from "../routes/notes.route.js";
const app = express();
// middle ware
app.use(express.json());
app.get("/", (req, res) => {
  try {
    res.send("ok got it");
    res.status(200).json({
      success: true,
      message: "testing api",
    });
  } catch (error) {
    console.log(error.message);
  }
});
app.use("/notes", router);
export default app;
