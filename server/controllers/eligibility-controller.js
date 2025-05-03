
const Scheme = require("../models/scheme-model");

const checkEligibilityForScheme = async (req, res) => {
    try {
      const userId = req.user.userId;
      const schemeId = req.params.schemeId;
  
      const user = await User.findById(userId);
      const scheme = await Scheme.findById(schemeId);
  
      if (!user || !scheme) {
        return res.status(404).json({ message: "User or Scheme not found" });
      }
  
      const calculateAge = (birthDate) => {
        const userBirthDate = new Date(birthDate);
        const currentDate = new Date();
        let age = currentDate.getFullYear() - userBirthDate.getFullYear();
        const monthDifference = currentDate.getMonth() - userBirthDate.getMonth();
  
        if (
          monthDifference < 0 ||
          (monthDifference === 0 &&
            currentDate.getDate() < userBirthDate.getDate())
        ) {
          age--;
        }
        return age;
      };
  
      const parseIncomeString = (incomeStr) => {
        if (!incomeStr) return null;
  
        const normalized = incomeStr.toLowerCase().replace(/,/g, "").trim();
  
        // Handle "no limit"
        if (normalized.includes("no limit") || normalized === "all") return null;
  
        // Fix common typo
        const cleaned = normalized.replace("up tp", "up to");
  
        const match = cleaned.match(/(\d+(\.\d+)?)\s*(lakh|thousand|crore)?/);
  
        if (!match) return null;
  
        let value = parseFloat(match[1]);
        const unit = match[3];
  
        switch (unit) {
          case "thousand":
            value *= 1_000;
            break;
          case "lakh":
            value *= 1_00_000;
            break;
          case "crore":
            value *= 1_00_00_000;
            break;
        }
  
        return value;
      };
  
      const schemeIncomeLimit = parseIncomeString(scheme.maxFamilyIncome);
      const userIncome = parseIncomeString(user.familyIncome);
  
      const normalize = (value) =>
        typeof value === "string" ? value.trim().toLowerCase() : value;
      const userAge = calculateAge(user.birthDate);
  
      // Updated checks using "all" logic
      const genderCheck =
        !scheme.gender ||
        normalize(scheme.gender) === "all" ||
        normalize(scheme.gender) === normalize(user.gender);
      const categoryCheck =
        !scheme.casteCategory ||
        normalize(scheme.casteCategory) === "all" ||
        normalize(scheme.casteCategory) === normalize(user.category);
      // const stateCheck = !scheme.state || normalize(scheme.state) === "all" || normalize(scheme.state) === normalize(user.state);
      const courseCheck =
        !scheme.course ||
        normalize(scheme.course) === "none" ||
        normalize(scheme.course) === normalize(user.course);
      const occupationCheck =
        !scheme.occupation ||
        normalize(scheme.occupation) === "all" ||
        normalize(scheme.occupation) === normalize(user.occupation);
      const disabilityStatusCheck =
        !scheme.disabilityStatus ||
        normalize(scheme.disabilityStatus) === "all" ||
        normalize(scheme.disabilityStatus) === normalize(user.disabilityStatus);
      const minorityStatusCheck =
        !scheme.minorityStatus ||
        normalize(scheme.minorityStatus) === "all" ||
        normalize(scheme.minorityStatus) === normalize(user.minorityStatus);
      const maritalStatusCheck =
        !scheme.maritalStatus ||
        normalize(scheme.maritalStatus) === "all" ||
        normalize(scheme.maritalStatus) === normalize(user.maritalStatus);
      const familyIncomeCheck =
        schemeIncomeLimit === null || userIncome <= schemeIncomeLimit;
  
      const ageCheck = !scheme.maxAge || userAge <= parseInt(scheme.maxAge);
  
      const isEligible =
        genderCheck &&
        categoryCheck &&
        courseCheck &&
        familyIncomeCheck &&
        ageCheck &&
        occupationCheck &&
        disabilityStatusCheck &&
        minorityStatusCheck &&
        maritalStatusCheck;
  
      if (isEligible) {
        res.status(200).json({ eligible: true });
      } else {
        res.status(200).json({ eligible: false });
      }
      console.log("Gender Check:", genderCheck);
      console.log("Category Check:", categoryCheck);
      console.log("Course Check:", courseCheck);
      console.log("Family Income Check:", familyIncomeCheck);
      console.log("Age Check:", ageCheck);
      console.log("Occupation Check:", occupationCheck);
      console.log("Disability Status Check:", disabilityStatusCheck);
      console.log("Minority Status Check:", minorityStatusCheck);
      console.log("Marital Status Check:", maritalStatusCheck);
      console.log("Parsed Scheme Income Limit:", schemeIncomeLimit);
      console.log("Parsed User Income:", userIncome);
    } catch (error) {
      console.error("Eligibility check error:", error);
      res.status(500).json({ message: "Server error", error: error.message });
    }
  };

  module.exports = {
    checkEligibilityForScheme
  };