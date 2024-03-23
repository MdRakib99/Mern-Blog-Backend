const express = require("express");
const { test } = require("../controllers/testController");
const { registration, login } = require("../controllers/userController");

const router = express.Router();

//Test Route
router.get("/test", test);

//User
router.post("/sign-up", registration);
router.post("/login", login);

module.exports = router;
