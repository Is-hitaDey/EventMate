const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors")

const authRoutes = require("./routes/User.routes");
const eventRoutes = require("./routes/Event.routes");
const bookingRoutes = require("./routes/Booking.routes");
const reviewRoutes = require("./routes/Review.routes");

const app = express();

app.use(express.json());
app.use(cors({
    origin: process.env.FRONTEND_URL|| 'http://localhost:5173',
    credentials :true,
}))
app.use(cookieParser());


// Routes
app.use("/api/auth", authRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/reviews", reviewRoutes);


module.exports = app;