import mongoose from "mongoose";
const postSchema = new mongoose.Schema({
  caption: {
    type: String,
    required: [true, "caption is required"],
    minLength: 3,
    maxLength: 20,
  },
  image: {
    type: String,
    required: [true, "Image is required"],
  },
},{timestamps:true});
const postModel = mongoose.model("posts", postSchema);
export default postModel;
