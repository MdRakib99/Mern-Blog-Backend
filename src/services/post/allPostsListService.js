const postModel = require("../../models/post/postModel");

const allPostsListService = async (req) => {
  try {
    const totalCount = { $count: "total" };

    // Fetch all posts
    const data = await postModel.find();

    // Get the total count of posts
    const countResult = await postModel.aggregate([totalCount]);

    // Extract the total count from the countResult array
    const totalPosts = countResult.length > 0 ? countResult[0].total : 0;

    return { status: "success", data: { posts: data, total: totalPosts } };
  } catch (error) {
    return { status: "fail", data: error };
  }
};

module.exports = allPostsListService;
