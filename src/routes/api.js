const express = require("express");
const { test } = require("../controllers/testController");
const {
  registration,
  login,
  updateProfile,
  profileDetails,
} = require("../controllers/userController");
const authVerifyMiddleware = require("../middleware/authVerifyMiddleware");
const {
  createPost,
  postsList,
  deletePost,
  getPost,
} = require("../controllers/postController");
const { upload } = require("../middleware/multerMiddleware");

const router = express.Router();

//Test Route
router.get("/test", test);

//User

router.post("/sign-up", registration);
router.post("/login", login);
router.post("/updateProfile", authVerifyMiddleware, updateProfile);
router.get("/profileDetails", authVerifyMiddleware, profileDetails);

//Post

router.post(
  "/create-post",
  authVerifyMiddleware,
  upload.fields([{ name: "image", maxCount: 1 }]),
  createPost
);
// Posts List
router.get("/posts-list", authVerifyMiddleware, postsList);

//DeletePost

router.delete("/delete-post/:id", authVerifyMiddleware, deletePost);
//Get Post

router.get("/get-post/:id", authVerifyMiddleware, getPost);

module.exports = router;
