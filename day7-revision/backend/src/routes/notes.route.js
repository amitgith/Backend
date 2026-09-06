import express from "express";
import { createNoteController } from "../controllers/note.controller.js";
const router = express.Router();
router.post("/create", createNoteController);
export default router;
