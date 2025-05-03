const User = require("../models/user-model");

const getProfile = async (req, res) => {
    try {
      const userId = req.params.id;
  
      // Find user by ID, exclude password field
      const user = await User.findById(userId).select("-password");
  
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      res.json(user); // send user profile
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  };
  
  const updateProfile = async (req, res) => {
    try {
      const userId = req.params.id;
      const updatedData = req.body;
  
      const user = await User.findByIdAndUpdate(userId, updatedData, {
        new: true,
        runValidators: true,
        select: "-password", // Don't return password
      });
  
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      res.status(200).json({ message: "Profile updated successfully", user });
    } catch (error) {
      console.error("Profile update error:", error);
      res.status(500).json({ message: "Server Error", error: error.message });
    }
  };

  module.exports = {
    getProfile,
    updateProfile,
  };