const Feedback = require("../models/feedback-model");
const mongoose = require("mongoose");

const submitFeedback = async (req, res) => {
    try {
      console.log("User from token:", req.user);
      const {
        usageFrequency,
        motivation,
        mostUsedFeature,
        improvement,
        followUp,
      } = req.body;
  
      if (!usageFrequency || !motivation || !mostUsedFeature || !improvement) {
        return res.status(400).json({ error: "All fields are required" });
      }
  
      const feedback = new Feedback({
        userId: new mongoose.Types.ObjectId(req.user.userId),
        usageFrequency,
        motivation,
        mostUsedFeature,
        improvement,
        followUp,
      });
  
      await feedback.save();
  
      res.status(201).json({ message: "Feedback submitted successfully" });
    } catch (error) {
      console.error("Feedback submission error:", error); // print full error in console
      res.status(500).json({
        message: "Failed to post feedback",
        error: error.message,
      });
    }
  };
  
  const getAllFeedbacks = async (req, res) => {
    try {
      const feedbacks = await Feedback.find()
        .populate("userId", "firstName email") // Optionally populate user data
        .exec();
  
      res.status(200).json({
        message: "Feedbacks fetched successfully",
        feedbacks,
      });
    } catch (error) {
      console.error("Error fetching feedbacks:", error);
      res
        .status(500)
        .json({ message: "Failed to fetch feedbacks", error: error.message });
    }
  };

  module.exports = {
    submitFeedback,
      getAllFeedbacks,
  };