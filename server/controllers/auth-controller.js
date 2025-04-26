const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

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
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });

    if (!userExist) return res.status(400).json({ msg: "Invalid Credentials" });

    const user = await userExist.comparePassword(password);

    if (user)
      res.status(200).json({
        message: "Login Successfull",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    else res.status(401).json({ msg: "Invalid Credentials" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { home, register, login };
