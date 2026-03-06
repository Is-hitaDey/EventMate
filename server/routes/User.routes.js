const { Router } = require("express");
const { registerUser, loginUser } = require("../controllers/User.controller");
const { VerifyOtp } = require("../utils/verifyOtp");

const router = Router();

router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/verify-otp").post(VerifyOtp)

module.exports= router;