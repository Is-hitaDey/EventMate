const User = require("../models/User");
const { ApiError } = require("../utils/ApiError");
const { AsyncHandler } = require("../utils/AsyncHandler");

const registerUser = AsyncHandler(async (req, res) => {
    const { name, email, password, confirmPassword } = req.body;

    if (!name || !email || !password || !confirmPassword) {
        throw new ApiError(400, "All fields are required.")
    }

    if( !(password === confirmPassword)){
        throw new ApiError(400, "Passwords should be same.")
    }

    const existingUser = await User.findone({email: email})

    if(existingUser){
        if(!existingUser.userVerified) {
            //make otp verification
        }

        throw new ApiError(409, "User with this email already exists and is verified")
    }

    const user = await User.create({
        name ,
        email,
        password,
    })
})