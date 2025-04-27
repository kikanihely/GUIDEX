const express = require("express");
const router = express.Router();
const authcontrollers = require("../controllers/auth-controller");
const authMiddleware = require("../middlewares/auth-middleware");
const verifyToken = require("../middlewares/verify-token");

router.route("/").get(authcontrollers.home);
router.route("/auth/register").post(authcontrollers.register);
router.route("/auth/login").post(authcontrollers.login);
router.get("/admin/feedback", authcontrollers.getAllFeedbacks); 
router.post("/feedback",verifyToken, authcontrollers.submitFeedback);
router.route("/admin/add-scheme").post(authcontrollers.addScheme);
router.get("/admin/schemes", authcontrollers.getAllSchemes);
router.delete("/admin/delete-scheme/:id", authcontrollers.deleteScheme);
router.get("/admin/schemes/:id", authcontrollers.getSingleScheme);
router.put("/admin/edit-scheme/:id", authcontrollers.updateScheme);
router.route("/get-profile/:id").get(authcontrollers.getProfile);
router.put("/update-profile/:id", authcontrollers.updateProfile);


module.exports = router;
