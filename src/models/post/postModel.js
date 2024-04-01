const mongoose = require("mongoose");

const dataSchema = mongoose.Schema(
  {
    title: { type: String, required: true },

    description: { type: String, required: true },
    category: { type: String, default: "Uncategorize" },
    image: {
      type: String,
      default:
        "https://www.growthtribe.com/wp-content/uploads/2018/08/Blog-Post-Feature-Image.jpg",
    },
    email: { type: String },
    isAdmin: { type: Boolean },
    slug: {
      type: String,
    },
  },
  { timestamps: true, versionKey: false }
);

const postModel = mongoose.model("posts", dataSchema);

module.exports = postModel;
