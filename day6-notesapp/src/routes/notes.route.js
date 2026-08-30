const express = require("express");
const {
  createNotesController,
  getAllnotesController,
  getSingleNoteController,
  updatedNotesController,
  deleteNotesController,
} = require("../controllers/notes.controller");
const router = express.Router();
router.post("/create", createNotesController);
router.get("/allNotes", getAllnotesController);
router.get("/:id", getSingleNoteController);
router.put("/:id", updatedNotesController);
router.delete("/:id", deleteNotesController);
module.exports = router;
