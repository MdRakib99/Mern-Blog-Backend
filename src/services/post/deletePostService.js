const postModel = require("../../models/post/postModel");

const deletePostService = async (req) => {
  try {
    let deleteID = req.params.id;
    let email = req.headers["email"];

    let queryObject = {};

    queryObject["_id"] = deleteID;
    queryObject["email"] = email;

    let data = await postModel.deleteOne(queryObject);

    return { status: "success", delete: data };
  } catch (error) {
    return { status: "fail", data: error };
  }
};

module.exports = deletePostService;
