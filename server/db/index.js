const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/eventmate`)
    } catch (err) {
        console.log("MongoDB Connection error", err);
        process.exit(1)
    }
}

module.exports = connectDB;