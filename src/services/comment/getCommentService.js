const commentModel = require("../../models/comment/commentModel");

const getCommentService = async (req) => {
  try {
    const postId = req.params.postId;
    const data = await commentModel.find({ postId }).sort({ createdAt: -1 });
    return { status: "success", data: data };
  } catch (error) {
    return { status: "success", data: error };
  }
};

module.exports = getCommentService;
