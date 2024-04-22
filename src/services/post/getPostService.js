const postModel = require("../../models/post/postModel");

const getPostService = async (req) => {
  try {
    let updateID = req.params.id;
    let email = req.headers["email"];

    let queryObject = {};
    queryObject["_id"] = updateID;
    queryObject["email"] = email;

    const data = await postModel.findOne(queryObject);
    return { status: "success", data: data };
  } catch (error) {
    return { status: "success", data: error };
  }
};

module.exports = getPostService;
