const mongoose = require("mongoose");


const schemeSchema = new mongoose.Schema(
  {
    schemeName: { type: String, required: [true, "Scheme Name is required"] },
    schemeCategory: { type: String, required: [true, "Scheme Category is required"] },
    schemeDescription: { type: String, required: [true, "Scheme Description is required"] },
    category: { type: String, required: [true, "Category is required"] },
    gender: { type: String, required: [true, "Gender is required"] },
    maxFamilyIncome: { type: String, required: [true, "Maximum Family Income is required"] },
    maxClass: { type: String, required: [true, "Maximum Class is required"] },
    maxAge: { type: String, required: [true, "Maximum Age is required"] },
    casteCategory: { type: String, required: [true, "Caste/Category is required"] },
    nationality: { type: String, required: [true, "Nationality is required"] },
    state: { type: String, required: [true, "State is required"] },
    disabilityStatus: { type: String, required: [true, "Disability Status is required"] },
    minorityStatus: { type: String, required: [true, "Minority Status is required"] },
    maritalStatus: { type: String, required: [true, "Marital Status is required"] },
    occupation: { type: String, required: [true, "Occupation is required"] },
    alreadyAvailed: { type: String, required: [true, "Already Availed field is required"] },
    course: { type: String, required: [true, "Course is required"] },
    selectedTagDocuments: {
      type: [String],
      required: [true, "Required Documents are mandatory"],
      validate: [(val) => val.length > 0, "At least one document is required"]
    },
    benefits: { type: String, required: [true, "Benefits field is required"] },
    stepsForApplying: {
      type: [String],
      required: [true, "Steps for Applying are required"],
      validate: [(val) => val.length > 0, "At least one step is required"]
    },
  },
  { timestamps: true }
);

const Scheme = new mongoose.model("Scheme", schemeSchema);


module.exports = Scheme;