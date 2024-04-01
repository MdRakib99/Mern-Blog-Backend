const postModel = require("../../models/post/postModel");

const createPostService = async (req) => {
  try {
    let postBody = req.body;
    postBody.email = req.headers["email"];
    postBody.isAdmin = req.headers["isAdmin"];

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
