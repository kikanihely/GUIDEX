const express = require("express");
const router = express.Router();
const authcontrollers = require("../controllers/auth-controller");
const authMiddleware = require("../middlewares/auth-middleware");
const verifyToken = require("../middlewares/verify-token");

router.route("/").get(authcontrollers.home);
router.route("/register").post(authcontrollers.register);
router.route("/login").post(authcontrollers.login);
router.get("/admin/feedback", authcontrollers.getAllFeedbacks); 
router.post("/feedback",verifyToken, authcontrollers.submitFeedback);

module.exports = router;
