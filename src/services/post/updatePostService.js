const postModel = require("../../models/post/postModel");
const { uploadOnCloudinary } = require("../../utility/cloudinary");

const updatePostService = async (req) => {
  try {
    const updateID = req.params.id;
    const email = req.headers["email"];
    const postBody = req.body;

    let updateFields = {};

    if (postBody.title) {
      updateFields.title = postBody.title;

      updateFields.slug = postBody.title
        .split(" ")
        .join("-")
        .toLowerCase()
        .replace(/[^a-zA-Z0-9-]/g, "-");
    }

    if (postBody.description) {
      updateFields.description = postBody.description;
    }

    if (req.files?.image) {
      const imageLocalPath = req.files.image[0].path;
      const image = await uploadOnCloudinary(imageLocalPath);
      updateFields.image = image.url;
    }

    const queryObject = {
      _id: updateID,
      email: email,
    };

    const updatedPost = await postModel.findOneAndUpdate(
      queryObject,
      updateFields,
      { new: true }
    );

    if (!updatedPost) {
      return {
        status: "fail",
        data: "Post not found or user not authorized to update",
      };
    }

    return { status: "success", data: updatedPost };
  } catch (error) {
    return { status: "fail", data: error.toString() };
  }
};

module.exports = updatePostService;
