const express = require("express");
const { test } = require("../controllers/testController");
const { registration } = require("../controllers/userController");

const router = express.Router();

//Test Route
router.get("/test", test);

//User
router.post("/sign-up", registration);
module.exports = router;
