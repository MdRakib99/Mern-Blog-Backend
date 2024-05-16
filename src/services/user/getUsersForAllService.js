const userModel = require("../../models/users/userModel");

const getUsersForAllService = async (req) => {
  try {
    const userEmail = req.params.email;

    const projectionStage = {
      $project: { _id: 1, email: 1, username: 1, photo: 1 },
    };
    const matchStage = {
      $match: { email: userEmail },
    };
    const data = await userModel.aggregate([matchStage, projectionStage]);
    return { status: "success", data: data };
  } catch (error) {
    return { status: "fail", data: error };
  }
};

module.exports = getUsersForAllService;
