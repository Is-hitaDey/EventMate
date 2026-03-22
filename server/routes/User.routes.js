const router = require("express").Router();

const {
    registerUser,
    loginUser,
    logoutUser,
    verifyOtp,
    resendOtp
} = require("../controllers/authController");

const Authmiddleware= require("../middleware/Authmiddleware")


// Register
router.post("/register", registerUser);

// Login
router.post("/login", loginUser);

// Verify OTP
router.post("/verify-otp", verifyOtp);

// Resend OTP
router.post("/resend-otp", resendOtp);

// Logout
router.post("/logout", Authmiddleware, logoutUser);


module.exports = router;