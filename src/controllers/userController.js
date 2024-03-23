const createUserService = require("../services/user/createUserService");
const loginUserService = require("../services/user/loginUserService");

exports.registration = async (req, res) => {
  let result = await createUserService(req);
  res.status(200).json(result);
};

exports.login = async (req, res) => {
  let result = await loginUserService(req);
  if (result.status === "success") {
    res.cookie("token", result["token"]);
    return res.status(200).json(result);
  } else {
    res.status(401).json(result);
  }
};
