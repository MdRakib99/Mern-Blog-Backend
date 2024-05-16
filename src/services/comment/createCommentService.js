const commentModel = require("../../models/comment/commentModel");

const createCommentService = async (req) => {
  try {
    let postBody = req.body;

    const email = req.headers["email"];
    postBody.userEmail = email;
    const data = await commentModel.create(postBody);
    return { status: "success", data: data };
  } catch (error) {
    return { status: "fail", data: error.toString() };
  }
};

module.exports = createCommentService;
