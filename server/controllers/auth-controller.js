const User = require("../models/user-model");
const jwt = require("jsonwebtoken")
const Feedback = require("../models/feedback-model");
const mongoose = require("mongoose");
const Scheme = require("../models/scheme-model");

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
    res.status(500).json({ message: "Failed to fetch feedbacks", error: error.message });
  }
};

const addScheme = async (req, res) => {
  try {
    const newScheme = new Scheme(req.body);
    await newScheme.save();
    res.status(201).json({ message: "Scheme created successfully!" });
  } catch (error) {
    console.error("Error creating scheme:", error);
    res.status(500).json({ message: "Server Error", error });
  }
};

const getAllSchemes = async (req, res) => {
  try {
    const schemes = await Scheme.find();
    res.status(200).json({ schemes });
  } catch (error) {
    console.error("Error fetching schemes:", error);
    res.status(500).json({ message: "Failed to fetch schemes", error: error.message });
  }
};

const deleteScheme = async (req, res) => {
  try {
    const { id } = req.params;
    await Scheme.findByIdAndDelete(id);
    res.status(200).json({ message: "Scheme deleted successfully" });
  } catch (error) {
    console.error("Error deleting scheme:", error);
    res.status(500).json({ message: "Server Error", error });
  }
};

const getSingleScheme = async (req, res) => {
  try {
    const { id } = req.params;
    const scheme = await Scheme.findById(id);

    if (!scheme) {
      return res.status(404).json({ message: "Scheme not found" });
    }

    res.status(200).json({ scheme });
  } catch (error) {
    console.error("Error fetching scheme:", error);
    res.status(500).json({ message: "Server Error", error });
  }
};

const updateScheme = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedScheme = await Scheme.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedScheme) {
      return res.status(404).json({ message: "Scheme not found" });
    }

    res.status(200).json({ message: "Scheme updated successfully" });
  } catch (error) {
    console.error("Error updating scheme:", error);
    res.status(500).json({ message: "Server Error", error });
  }
};



module.exports = { home, register, login, submitFeedback, getAllFeedbacks, addScheme, getAllSchemes, deleteScheme, updateScheme, getSingleScheme, getProfile, updateProfile };
