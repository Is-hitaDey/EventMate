const User = require("../models/User");
const { ApiError } = require("../utils/ApiError");
const { AsyncHandler } = require("../utils/AsyncHandler");
const { generateAccessAndRefreshToken } = require("../utils/generateAccessAndRefreshToken");
const SendEmail = require("../utils/SendEmail");

const sendOtpVerification = async (user) => {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    user.otp = otp;
    user.otpExpiry = new Date(Date.now() + Number(process.env.OTP_EXPIRY_MINUTES) * 60 * 1000);
    await user.save({ validateBeforeSave: false });

    await SendEmail(
        user.email,
        'Verify Your Email - OTP',
        `<p>The OTP is <strong>${otp}</strong></p>`
    )
};

const verifyOtp = AsyncHandler(async (req, res) => {
    const { email, otp } = req.body;

    if (!email || !otp) {
        throw new ApiError(400, "Email and OTP are required");
    }

    const user = await User.findOne({ email });

    if (!user) {
        throw new ApiError(404, "User not found");
    }

    if (user.userVerified) {
        throw new ApiError(400, "User already verified");
    }

    if (user.otp !== otp) {
        throw new ApiError(400, "Invalid OTP");
    }

    if (user.otpExpiry < Date.now()) {
        throw new ApiError(400, "OTP expired");
    }

    user.userVerified = true;
    user.otp = undefined;
    user.otpExpiry = undefined;

    await user.save();

    return res.status(200).json({
        message: "Email verified successfully"
    });
});

const resendOtp = AsyncHandler(async (req, res) => {

    const { email } = req.body;

    if (!email) {
        throw new ApiError(400, "Email is required");
    }

    const user = await User.findOne({ email });

    if (!user) {
        throw new ApiError(404, "User not found");
    }

    if (user.userVerified) {
        throw new ApiError(400, "User already verified");
    }

    await sendOtpVerification(user);

    return res.status(200).json({
        message: "OTP resent successfully"
    });

});

const registerUser = AsyncHandler(async (req, res) => {
    const { name, email, password, confirmPassword } = req.body;

    if (!name || !email || !password || !confirmPassword) {
        throw new ApiError(400, "All fields are required.")
    }

    if (!(password === confirmPassword)) {
        throw new ApiError(400, "Passwords should be same.")
    }

    const existingUser = await User.findOne({ email })

    if (existingUser) {
        if (!existingUser.userVerified) {
            await sendOtpVerification(existingUser);
            return res.status(200).json({
                message: "User already exists but not verified. OTP resent to your email",
                email: existingUser.email
            });
        }

        throw new ApiError(409, "User with this email already exists and is verified")
    }

    const user = await User.create({
        name,
        email,
        password,
        userActive: true,
        userVerified: false
    });

    try {
        await sendOtpVerification(user);
    } catch (error) {
        throw new ApiError(500, "Failed to send otp to email. User Registration aborted")
    }

    const createdUser = await User.findById(user._id).select("-password -refreshToken -otp - otpExpiry")

    if (!createdUser) {
        throw new ApiError(500, "Something went wrong while registering the user")
    }

    return res.status(201).json({
        message: "Registered successfully! Otp sent to your email for verification.",
        email: createdUser.email

    })
});


const loginUser = AsyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        throw new ApiError(400, "Please enter all the fields")
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
        throw new ApiError(400, "Invalid Email. Register first.")
    }

    if (!user.userActive) {
    throw new ApiError(403, "User account is disabled");
}

    if (!user.userVerified) {
        throw new ApiError(403, "Please verify your email first")
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
        throw new ApiError(400, "Invalid Password")
    }

    const { accessToken, refreshToken } = generateAccessAndRefreshToken(user._id);
    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

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
        message: "Logged in successfully!",
        user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            userVerified: user.userVerified
        }
    })
});

const logoutUser = AsyncHandler(async (req, res) => {

    const user = await User.findById(req.user._id);

    if (!user) {
        throw new ApiError(404, "User not found");
    }

    user.refreshToken = null;
    await user.save({ validateBeforeSave: false });

    const cookieOptions = {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "Lax"
    };

    res.clearCookie("accessToken", cookieOptions);
    res.clearCookie("refreshToken", cookieOptions);

    return res.status(200).json({
        message: "Logged out successfully"
    });

});

module.exports = { verifyOtp, resendOtp, registerUser, loginUser, logoutUser }