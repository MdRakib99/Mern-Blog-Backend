const createCommentService = require("../services/comment/createCommentService");
const getCommentService = require("../services/comment/getCommentService");

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
