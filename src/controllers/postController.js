const createPostService = require("../services/post/createPostService");

exports.createPost = async (req, res) => {
  let result = await createPostService(req);

  if (result.status === "success") {
    res.status(201).json(result);
  } else {
    res.status(401).json(result);
  }
};
