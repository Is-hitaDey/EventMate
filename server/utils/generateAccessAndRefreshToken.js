const User = require("../models/User");
const { ApiError } = require("./ApiError");


const generateAccessAndRefreshToken = async(userId)=>{
    try{
        const user = await User.findById(userId);
        if(!user){
            console.error("User not found for token generation with Id:",userId)
        }

        const accessToken = user.generateAccessToken();
        const refreshToken= user.generateRefreshToken;
        user.refreshToken=refreshToken;

        await user.save({validateBeforeSave:false});

        return {accessToken,refreshToken}

    }catch(err){
        console.error(`Error in generating access and refresh token`,err);
        throw new ApiError(500, "Something went wrong while generating refresh and access token")
    }
};

module.exports = {generateAccessAndRefreshToken}