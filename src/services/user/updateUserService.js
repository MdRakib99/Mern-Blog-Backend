const userModel = require("../../models/users/userModel");

const updateUserService = async (req, res) => {
  try {
    const postBody = req.body;

    let email = req.headers["email"];

    let data = await userModel.updateOne({ email }, postBody);
    console.log(data);
    return { status: "success", data: data };
  } catch (error) {
    return { status: "fail", data: error.toString() };
  }
};

module.exports = updateUserService;
