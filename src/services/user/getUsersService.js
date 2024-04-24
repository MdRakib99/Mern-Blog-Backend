const userModel = require("../../models/users/userModel");

const getUsersService = async (req) => {
  try {
    const isAdmin = req.headers.isAdmin;

    const projectionStage = {
      $project: { _id: 1, email: 1, username: 1, isAdmin: 1, photo: 1 },
    };
    if (isAdmin === true) {
      const data = await userModel.aggregate([projectionStage]);
      return { status: "success", data: data };
    } else {
      return { status: "fail", data: "You are not admin" };
    }
  } catch (error) {
    return { status: "fail", data: error };
  }
};

module.exports = getUsersService;
