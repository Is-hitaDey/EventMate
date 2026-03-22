const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
{
    title:{
        type:String,
        required:true,
        trim:true
    },

    description:{
        type:String,
        required:true
    },

    category:{
        type:String,
        required:true
    },

    organizer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },

    venue:{
        type:String,
        required:true
    },

    date:{
        type:Date,
        required:true
    },

    price:{
        type:Number,
        required:true,
        min:0
    },

    totalSeats:{
        type:Number,
        required:true
    },

    availableSeats:{
        type:Number,
        required:true
    },

    image:{
        type:String
    },

    attendees:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    ],

    averageRating:{
        type:Number,
        default:0
    },

    totalReviews:{
        type:Number,
        default:0
    },

    status:{
        type:String,
        enum:["upcoming","completed","cancelled"],
        default:"upcoming"
    }

},
{timestamps:true}
);

module.exports = mongoose.model("Event",eventSchema);