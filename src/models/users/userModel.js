const mongoose = require("mongoose");

const dataSchema = mongoose.Schema(
  {
    email: { type: String, unique: true, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    photo: { type: String },
  },
  { timestamps: true, versionKey: false }
);

const userModel = mongoose.model("users", dataSchema);

module.exports = userModel;
