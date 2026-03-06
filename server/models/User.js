const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid email address"],
        lowercase: true,
        trim: true
    },
    password: {
        type:String,
        required:true
    },
    role:{
        type: String,
        enum :["attendee", "organizer"], 
        default : "attendee"
    },
    enrolledEvents:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event"
    }],
    userActive:{
        type: String
    },
    userVerified: {
        type: String
    },
    otp:{
        type: String
    },
    otpExpiry: {
        type: Date
    }
}, { timestamps: true });

userSchema.pre("save", async function (next) {
    if(!this.isModified('password')){
        return next();
    }

    this.password= await bcrypt.hash(this.password,10)
    next(); 
});

userSchema.methods.comparePassword = async function (candidatePassword){
    return await bcrypt.compare(candidatePassword,this.password)
}

userSchema.methods.generateAccessToken = ()=>{
    return jwt.sign(
        {
            _id: this.id,
            email: this.email,
            name: this.name
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

userSchema.methods.generateRefreshToken = ()=>{
    return jwt.sign(
        {
            _id:this.id,
        },
        process.env.REFRESH_TOKEN_SECRET
    ),
    {
        expiredIn : process.env.REFRESH_TOKEN_EXPIRY
    }
}

module.exports = mongoose.model("User", userSchema);