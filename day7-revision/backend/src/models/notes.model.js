import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "title is required"],
    minLength: [3, "Minimum 3 characters are required"],
    maxLength: [20, "Maximum 20 characters are required"],
  },
  description: {
    type: String,
    required: [true, "title is required"],
    minLength: [8, "Minimum 8 characters are required"],
    maxLength: [50, "Maximum 50 characters are required"],
  },
});
const noteModel = mongoose.model("notes", noteSchema);
export default noteModel;
