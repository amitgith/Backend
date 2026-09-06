import express from "express";
import {
  createNoteController,
  getAllNoteContoller,
  getSingleNoteController,
} from "../controllers/note.controller.js";
const router = express.Router();
//create
router.post("/create", createNoteController);
// Read
router.get("/allNotes", getAllNoteContoller);
// read one
router.get("/:id", getSingleNoteController);
export default router;
