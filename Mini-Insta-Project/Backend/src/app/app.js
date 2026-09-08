import express from "express";
import postRoutes from "../routes/post.route.js";
const app = express();
// middleware
app.use(express.json());
app.get("/", (req, res) => {
  try {
    res.status(200).json({
      success: true,
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
app.use("/api/post", postRoutes);
export default app;
