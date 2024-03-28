const express = require("express");
const { test } = require("../controllers/testController");
const {
  registration,
  login,
  updateProfile,
  profileDetails,
} = require("../controllers/userController");
const authVerifyMiddleware = require("../middleware/authVerifyMiddleware");

const router = express.Router();

//Test Route
router.get("/test", test);

//User
router.post("/sign-up", registration);
router.post("/login", login);
router.post("/updateProfile", authVerifyMiddleware, updateProfile);
router.get("/profileDetails", authVerifyMiddleware, profileDetails);

module.exports = router;
