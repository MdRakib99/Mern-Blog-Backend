const createUserService = require("../services/user/createUserService");
const detailsUserService = require("../services/user/detailsUserService");
const loginUserService = require("../services/user/loginUserService");
const updateUserService = require("../services/user/updateUserService");

exports.registration = async (req, res) => {
  let result = await createUserService(req);
  res.status(200).json(result);
};

exports.login = async (req, res) => {
  let result = await loginUserService(req);
  if (result.status === "success") {
    res.status(200).json(result);
  } else {
    res.status(401).json(result);
  }
};

exports.updateProfile = async (req, res) => {
  let result = await updateUserService(req);
  res.status(200).json(result);
};

exports.profileDetails = async (req, res) => {
  let result = await detailsUserService(req);
  res.status(200).json(result);
};
