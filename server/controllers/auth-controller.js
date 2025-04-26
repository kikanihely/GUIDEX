const User = require("../models/user-model");
const jwt = require("jsonwebtoken")
const Feedback = require("../models/feedback-model");
const mongoose = require("mongoose");

const home = async (req, res) => {
  try {
    res.status(200).send("Welcome to GUIDEX using router");
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      gender,
      birthDate,
      email,
      category,
      familyIncome,
      state,
      degree,
      course,
      password,
    } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) return res.status(400).json({ msg: "email already exist" });

    const userCreated = await User.create({
      firstName,
      lastName,
      gender,
      birthDate,
      email,
      category,
      familyIncome,
      state,
      degree,
      course,
      password,
    });

    res.status(201).json({
      message: "Registration Successfull",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  try {
    const { email, emailId, password } = req.body;
    const userEmail = email || emailId;

    let user = await User.findOne({ email: userEmail }).select("+password");

    if (!user) return res.status(400).json({ msg: "Invalid Credentials" });

    const isMatch = await user.comparePassword(password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1h" }
    );

    res.status(200).json({
      token,
      user: {
        _id: user._id,
        email: user.email,
        fullName: user.fullName, // or whatever fields you want
      },
    });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

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
      .populate("userId", "fullName email") // Optionally populate user data
      .exec();

    res.status(200).json({
      message: "Feedbacks fetched successfully",
      feedbacks,
    });
  } catch (error) {
    console.error("Error fetching feedbacks:", error);
    res.status(500).json({ message: "Failed to fetch feedbacks", error: error.message });
  }
};

module.exports = { home, register, login, submitFeedback, getAllFeedbacks };
