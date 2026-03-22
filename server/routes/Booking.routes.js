const router = require("express").Router();

const {
    createBooking,
    getMyBookings,
    cancelBooking
} = require("../controllers/bookingController");

const Authmiddleware = require("../middleware/Authmiddleware");


// Book an event
router.post("/create/:eventId", Authmiddleware, createBooking);

// Get logged in user bookings
router.get("/my-bookings", Authmiddleware, getMyBookings);

// Cancel booking
router.delete("/cancel/:bookingId", Authmiddleware, cancelBooking);


module.exports = router;