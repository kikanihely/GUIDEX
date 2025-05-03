const express = require("express");
const router = express.Router();
const authcontrollers = require("../controllers/auth-controller");
const profilecontrollers = require("../controllers/profile-controller");
const eligibilitycontrollers = require("../controllers/eligibility-controller");
const feedbackcontrollers = require("../controllers/feedback-controller");
const schemecontrollers = require("../controllers/scheme-controller");
const verifyToken = require("../middlewares/verify-token");

router.route("/").get(authcontrollers.home);
router.route("/auth/register").post(authcontrollers.register);
router.route("/auth/login").post(authcontrollers.login);
router.get("/admin/feedback", feedbackcontrollers.getAllFeedbacks); 
router.post("/feedback",verifyToken, feedbackcontrollers.submitFeedback);
router.route("/admin/add-scheme").post(schemecontrollers.addScheme);
router.get("/admin/schemes", schemecontrollers.getAllSchemes);
router.delete("/admin/delete-scheme/:id", schemecontrollers.deleteScheme);
router.get("/admin/schemes/:id", schemecontrollers.getSingleScheme);
router.put("/admin/edit-scheme/:id", schemecontrollers.updateScheme);
router.route("/get-profile/:id").get(profilecontrollers.getProfile);
router.put("/update-profile/:id", profilecontrollers.updateProfile);
router.post("/check-eligibility/:schemeId", verifyToken, eligibilitycontrollers.checkEligibilityForScheme);

module.exports = router;
