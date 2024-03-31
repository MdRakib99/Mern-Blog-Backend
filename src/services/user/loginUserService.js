const userModel = require("../../models/users/userModel");
const createToken = require("../../utility/createToken");

const loginUserService = async (req) => {
  const reqBody = req.body;

  try {
    const matchStage = { $match: reqBody };
    const projectionStage = {
      $project: {
        _id: 0,
        email: 1,
        isAdmin: 1,
        username: 1,

        photo: 1,
      },
    };
    let data = await userModel.aggregate([matchStage, projectionStage]);

    if (data.length > 0) {
      const userData = data[0];

      const payload = {
        email: userData.email,
        isAdmin: userData.isAdmin,
      };
      let token = await createToken(payload);

      return { status: "success", token: token, data: userData };
    } else {
      return { status: "fail", data: "unauthorize" };
    }
  } catch (error) {
    return { status: "fail", data: error.toString() };
  }
};

module.exports = loginUserService;
