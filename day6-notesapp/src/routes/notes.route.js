const express = require("express");
const {
  createNotesController,
  getAllnotesController,
} = require("../controllers/notes.controller");
const router = express.Router();
router.post("/create", createNotesController);
router.get("/allNotes", getAllnotesController);
module.exports = router;
