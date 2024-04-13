const postModel = require("../../models/post/postModel");
const { uploadOnCloudinary } = require("../../utility/cloudinary");

const createPostService = async (req) => {
  try {
    let postBody = req.body;
    postBody.email = req.headers["email"];
    postBody.isAdmin = req.headers["isAdmin"];

    let imageLocalPath = req.files?.image[0]?.path;

    let image = await uploadOnCloudinary(imageLocalPath);
    postBody.image = image.url;

    postBody.slug = postBody.title
      .split(" ")
      .join("-")
      .toLowerCase()
      .replace(/[^a-zA-Z0-9-]/g, "-");

    let data = await postModel.create(postBody);
    return { status: "success", data: data };
  } catch (error) {
    return { status: "fail", data: error.toString() };
  }
};

module.exports = createPostService;
