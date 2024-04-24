const createPostService = require("../services/post/createPostService");
const deletePostService = require("../services/post/deletePostService");
const getPostService = require("../services/post/getPostService");
const postsListService = require("../services/post/postsListService");
const updatePostService = require("../services/post/updatePostService");

exports.createPost = async (req, res) => {
  let result = await createPostService(req);

  if (result.status === "success") {
    res.status(201).json(result);
  } else {
    res.status(401).json(result);
  }
};

exports.postsList = async (req, res) => {
  let result = await postsListService(req);
  if (result.status === "success") {
    res.status(200).json(result);
  } else {
    res.status(404).json(result);
  }
};
exports.getPost = async (req, res) => {
  let result = await getPostService(req);
  if (result.status === "success") {
    res.status(200).json(result);
  } else {
    res.status(404).json(result);
  }
};

exports.deletePost = async (req, res) => {
  let result = await deletePostService(req);
  if (result.status === "success") {
    res.status(200).json(result);
  } else {
    res.status(404).json(result);
  }
};
exports.updatePost = async (req, res) => {
  let result = await updatePostService(req);
  if (result.status === "success") {
    res.status(200).json(result);
  } else {
    res.status(404).json(result);
  }
};
