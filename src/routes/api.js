const express = require("express");
const { test } = require("../controllers/testController");
const {
  registration,
  login,
  updateProfile,
  profileDetails,
  getUsers,
  deleteUser,
} = require("../controllers/userController");
const authVerifyMiddleware = require("../middleware/authVerifyMiddleware");
const {
  createPost,
  postsList,
  deletePost,
  getPost,
  updatePost,
  postsListAll,
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
router.get("/get-users", authVerifyMiddleware, getUsers);
router.delete("/delete-user/:id", authVerifyMiddleware, deleteUser);

//Post

router.post(
  "/create-post",
  authVerifyMiddleware,
  upload.fields([{ name: "image", maxCount: 1 }]),
  createPost
);
// Posts List
router.get("/posts-list", authVerifyMiddleware, postsList);
router.get("/posts-list-all", postsListAll);

//DeletePost

router.delete("/delete-post/:id", authVerifyMiddleware, deletePost);
//Get Post

router.get("/get-post/:identifier", authVerifyMiddleware, getPost);
//Update Post

router.post(
  "/update-post/:id",
  authVerifyMiddleware,
  upload.fields([{ name: "image", maxCount: 1 }]),
  updatePost
);

module.exports = router;
