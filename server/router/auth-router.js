const express = require("express");
const router = express.Router();
const authcontrollers = require("../controllers/auth-controller");
const validator = require("../validators/auth-validator");
const validate = require("../middlewares/validator-middleware");

router.route("/").get(authcontrollers.home);
// router
//   .route("/register")
//   .post(validate(validator.registerSchema), authcontrollers.register);
router.route("/register").post(authcontrollers.register);
router.route("/login").post(authcontrollers.login);
// router
//   .route("/login")
//   .post(validate(validator.loginSchema), authcontrollers.login);

module.exports = router;
