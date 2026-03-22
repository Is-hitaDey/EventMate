const mongoose = require("mongoose")

const bookingSchema= new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true
    },
     event:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Event",
        required:true
     },
     tickets:{
        type:Number,
        required: true,
        min:1
     },
     totalPrice:{
        type:Number,
        required:true
     },
     bookingStatus:{
        type:String,
        enum:["confiremed","cancelled"],
        default:"confirmed"
     },
     paymentId:{
        type:String
     }
},{timestamps:true});

module.exports= mongoose.model("Booking",bookingSchema)