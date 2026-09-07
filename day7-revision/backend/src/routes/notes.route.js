import express from "express";
import {
  createNoteController,
  deleteNoteController,
  getAllNoteController,
  getSingleNoteController,
  singleEntityUpdateController,
  updateNotesController,
} from "../controllers/note.controller.js";
const router = express.Router();
//create
router.post("/create", createNoteController);
// Read
router.get("/allNotes", getAllNoteController);
// read one
router.get("/:id", getSingleNoteController);
// update via put
router.put("/:id", updateNotesController);
// update via patch
router.patch("/:id/single", singleEntityUpdateController);
// delete
router.delete("/:id", deleteNoteController);
export default router;
