const User = require("../models/user-model");
const jwt = require("jsonwebtoken");

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
      confirmPassword,
      disabilityStatus,
      minorityStatus,
      maritalStatus,
      occupation,
      alreadyAvailed,
    } = req.body;

    console.log(req.body);

    // Check if user exists
    const userExist = await User.findOne({ email });
    if (userExist) return res.status(400).json({ msg: "Email already exists" });

    // Password match check
    if (password !== confirmPassword) {
      return res.status(400).json({ msg: "Passwords do not match" });
    }

    // Create user
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
      disabilityStatus,
      minorityStatus,
      maritalStatus,
      occupation,
      alreadyAvailed,
    });

    res.status(201).json({
      message: "Registration Successful",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server Error" });
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

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1h",
    });

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

module.exports = {
  home,
  register,
  login,
};
