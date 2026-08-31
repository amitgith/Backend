const express = require("express");
const {
  createNotesController,
  getAllnotesController,
  getSingleNoteController,
  updatedNotesController,
  deleteNotesController,
  singleEntityUpdateController
} = require("../controllers/notes.controller");
const router = express.Router();
//create notes
router.post("/create", createNotesController);
// read all
router.get("/allNotes", getAllnotesController);
//read one
router.get("/:id", getSingleNoteController);
//update via patch
router.put("/:id", updatedNotesController);
//update via patch
router.patch("/:id/single",singleEntityUpdateController)
//delete
router.delete("/:id", deleteNotesController);
module.exports = router;
