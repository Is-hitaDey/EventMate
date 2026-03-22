const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
{
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },

    event:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Event",
        required:true
    },

    rating:{
        type:Number,
        required:true,
        min:1,
        max:5
    },

    comment:{
        type:String,
        trim:true
    }

},
{timestamps:true}
);

// 🔹 Prevent same user reviewing same event twice
reviewSchema.index({ user: 1, event: 1 }, { unique: true });

module.exports = mongoose.model("Review",reviewSchema);