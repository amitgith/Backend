import express from "express";
const app = express();
app.get("/", (req, res) => {
  try {
    res.status(200).json({
      success: false,
      message: "ok get it",
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      success: false,
      message: "Interval server error",
    });
  }
});
export default app;
