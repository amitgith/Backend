import noteModel from "../models/notes.model.js";

export const createNoteController = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newNote = await noteModel.create({
      title,
      description,
    });
    res.status(201).json({
      message: "Note created successfully",
      data: newNote,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const getAllNoteController = async (req, res) => {
  try {
    const allnotes = await noteModel.find();
    res.status(200).json({
      message: "All notes fetched",
      data: allnotes,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: "Internal Server error",
    });
  }
};
export const getSingleNoteController = async (req, res) => {
  try {
    const noteId = req.params.id;
    const note = await noteModel.findById(noteId);
    if (!note) {
      return res.status(404).json({
        message: "Note not found",
      });
    }
    res.status(200).json({
      message: "Note fetched successfully",
      data: note,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: "Internal Server error",
    });
  }
};
export const updateNotesController = async (req, res) => {
  try {
    const noteId = req.params.id;
    const body = req.body;
    const updatedNote = await noteModel.findByIdAndUpdate(noteId, body);
    if (!updatedNote) {
      return res.status(403).json({
        success: false,
        message: "Updated note not found",
      });
    }
    res.status(200).json({
      message: "Note Updated Successfully",
      data: updatedNote,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      message: "Internal Server error",
    });
  }
};
export const singleEntityUpdateController = async (req, res) => {
  try {
    const noteId = req.params.id;
    const body = req.body;
    const updatedId = await noteModel.findByIdAndUpdate(noteId, body);
    if (!updatedId) {
      return res.status(403).json({
        success: false,
        message: "single note not found",
      });
    }
    res.status(200).json({
      message: "Note updated Successfully",
      data: updatedId,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};


