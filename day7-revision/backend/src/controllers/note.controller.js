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
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
