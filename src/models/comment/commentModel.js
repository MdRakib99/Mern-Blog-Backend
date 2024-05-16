const mongoose = require("mongoose");

const dataSchema = mongoose.Schema(
  {
    content: { type: String, required: true },
    postId: { type: String, required: true },
    userEmail: { type: String, required: true },
    likes: { type: Array, default: [] },
    likesNumber: { type: Number, default: 0 },
  },
  { timestamps: true, versionKey: false }
);

const commentModel = mongoose.model("comments", dataSchema);

module.exports = commentModel;
