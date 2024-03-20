const createUserService = require("../services/user/createUserService");

exports.registration = async (req, res) => {
  let result = await createUserService(req);
  res.status(200).json(result);
};
