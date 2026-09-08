import postModel from "../models/post.model.js";

export const createPostController = async (req, res) => {
  try {
    const { caption, image } = req.body;
    if (!caption || !image) {
      return res.status(400).json({
        success: false,
        message: "caption or image are required",
      });
    }
    const post = await postModel.create({
      caption,
      image,
    });
    res.status(201).json({
      message: "Post created successfully",
      data: post,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
