import express from "express";
import { createPostController } from "../controllers/post.controller.js";
import { upload } from "../config/multer.config.js";
const router = express.Router();
router.post("/create", upload.single("image"), createPostController);
export default router;
