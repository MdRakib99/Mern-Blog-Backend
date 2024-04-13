const cloudinary = require("cloudinary").v2;
const fs = require("fs");

cloudinary.config({
  cloud_name: "dtqdijla9",
  api_key: "727986179126798",
  api_secret: "vG9KsdQlhExXCEo9HDfHixEXbjQ",
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) throw new Error("Local file path is missing");

    // Upload the file to Cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    // If successful, return the Cloudinary URL
    console.log("File is uploaded on Cloudinary", response.url);
    return response;
  } catch (error) {
    console.error("Error uploading file to Cloudinary:", error);
    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath); // Remove the locally saved temporary file
    }
    return null; // Return null to indicate failure
  }
};

module.exports = { uploadOnCloudinary };
