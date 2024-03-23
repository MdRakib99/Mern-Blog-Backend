const userModel = require("../../models/users/userModel");
const bcryptjs = require("bcryptjs");

const createUserService = async (req) => {
  try {
    let postBody = req.body;

    // Extract the password from the postBody
    // let password = postBody.password;

    // Hash the password synchronously
    // let hashedPassword = bcryptjs.hashSync(password, 10);

    // Replace the plaintext password with the hashed password
    // postBody.password = hashedPassword;

    // Create user with hashed password
    let data = await userModel.create(postBody);

    return { status: "success", data: data };
  } catch (error) {
    return { status: "fail", data: error.toString() };
  }
};

module.exports = createUserService;
