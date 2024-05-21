const createCommentService = require("../services/comment/createCommentService");
const getCommentService = require("../services/comment/getCommentService");
const { likeCommentService } = require("../services/comment/likeCommentSerice");

exports.createComment = async (req, res) => {
  let result = await createCommentService(req);

  if (result.status === "success") {
    res.status(201).json(result);
  } else {
    res.status(401).json(result);
  }
};
exports.getComment = async (req, res) => {
  let result = await getCommentService(req);
  res.status(200).json(result);
};

exports.likeComment = async (req, res) => {
  try {
    const result = await likeCommentService(req);
    res.status(result.status === "success" ? 200 : 500).json(result);
  } catch (error) {
    res.status(500).json({ status: "fail", data: error.message });
  }
};
