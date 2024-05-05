const userModel = require("../../models/users/userModel");

const deleteUsersService = async (req) => {
  try {
    let deleteID = req.params.id;
    let isAdmin = req.headers.isAdmin; // Using isAdmin instead of isadmin

    if (isAdmin === true) {
      // Check if isAdmin is true
      let data = await userModel.deleteOne({ _id: deleteID });
      return { status: "success", data: data };
    } else {
      return { status: "fail", data: "Only admin can delete users" };
    }
  } catch (error) {
    return { status: "fail", data: error };
  }
};

module.exports = deleteUsersService;
