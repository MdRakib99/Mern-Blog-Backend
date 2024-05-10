const postModel = require("../../models/post/postModel");

const getPostService = async (req) => {
  try {
    let identifier = req.params.identifier;
    let email = req.headers["email"];

    let queryObject = {};
    if (identifier.length === 24) {
      // Assuming the identifier is a MongoDB ObjectId (length 24)
      queryObject["_id"] = identifier;
    } else {
      // Assuming the identifier is a slug
      queryObject["slug"] = identifier;
    }
    queryObject["email"] = email;

    const data = await postModel.findOne(queryObject);
    return { status: "success", data: data };
  } catch (error) {
    return { status: "error", data: error.message };
  }
};

module.exports = getPostService;
