const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  gender: { type: String, required: true, enum: ["Male", "Female", "Other"] },
  birthDate: { type: Date, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
  },
  category: { type: String, required: true },
  familyIncome: { type: String, required: true },
  state: { type: String, required: true },
  degree: { type: String },
  course: { type: String },
  password: { type: String, required: true },
  disabilityStatus: { type: String, required: true },
  minorityStatus: { type: String, required: true },
  maritalStatus: { type: String, required: true },
  occupation: { type: String, required: true },
  alreadyAvailed: { type: String, required: true },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  try {
    const saltRound = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, saltRound);
    next();
  } catch (error) {
    next(error);
  }
});

userSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

userSchema.methods.generateToken = async function () {
  try {
    return jwt.sign(
      {
        userId: this._id.toString(),
        email: this.email,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "30d",
      }
    );
  } catch (error) {
    console.error(error);
  }
};

const User = mongoose.model("User", userSchema);

module.exports = User;
