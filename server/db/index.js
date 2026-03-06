const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`\n MongoDB is connected!! \n DB Host : ${connectionInstance.connection.host}`)
    } catch (err) {
        console.log("MongoDB Connection error", err);
        process.exit(1)
    }
}

module.exports = connectDB;