const commentModel = require("../../models/comment/commentModel");

const likeCommentService = async (req) => {
  try {
    const commentId = req.params.commentId;
    const userEmail = req.headers.email;
    const comment = await commentModel.findById(commentId);
    if (!comment) throw new Error("Comment not found");

    if (comment.likes.includes(userEmail)) {
      comment.likes = comment.likes.filter((email) => email !== userEmail);
      comment.likesNumber -= 1;
    } else {
      comment.likes.push(userEmail);
      comment.likesNumber += 1;
    }

    await comment.save();

    return { status: "success", data: comment };
  } catch (error) {
    return { status: "fail", data: error.message }; // Use error.message for better error reporting
  }
};

module.exports = { likeCommentService };
