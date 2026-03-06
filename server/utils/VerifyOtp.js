const User = require("../models/User");
const { ApiError } = require("./ApiError");
const { AsyncHandler } = require("./AsyncHandler");
const { generateAccessAndRefreshToken } = require("./generateAccessAndRefreshToken");



const VerifyOtp = AsyncHandler(async (req, res) => {
    const { email, otp } = req.body;

    if (!email || !otp) {
        throw new ApiError(400, "Email and Otp are required")
    }

    const user = await User.findone({ email })

    if (!user) {
        throw new ApiError(404, "User not found");
    }

    if (user.otp !== otp || user.otpExpiry < Date.now()) {
        user.otp = undefined;
        user.otpExpiry = undefined;
        await user.save({ validateBeforeSave: false })
        throw new ApiError(400, "Invalid or expired OTP");
    }

    user.userVerified = true;
    user.otp = undefined;
    user.otpExpiry = undefined;

    await user.save({ validateBeforeSave: false });

    const { accessToken, refreshToken } = await generateAccessAndRefreshToken(user._id);

    res.cookie("accessToken", accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "Lax",
        maxAge: Number(process.env.ACCESS_TOKEN_EXPIRY_MS)
    });

    res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "Lax",
        maxAge: Number(process.env.REFRESH_TOKEN_EXPIRY_MS)
    });


    return res.status(200).json({
        message: "Email verified Successfully! You are now logged in.",
        user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            userVerified:user.userVerified
        }
    })

});

module.exports = {VerifyOtp};