const router = require("express").Router();

const {
    createBooking,
    getMyBookings,
    getAllBookings,
    cancelBooking
} = require("../controllers/Booking.controller");

const Authmiddleware = require("../middleware/Authmiddleware");
const AuthorizeRoles = require("../middleware/AuthorizeRoles");


// Book an event
router.post("/create/:eventId", Authmiddleware, AuthorizeRoles("admin", "organizer"),createBooking);

// Get logged in user bookings
router.get("/my-bookings", Authmiddleware, getMyBookings);

// Cancel booking
router.delete("/cancel/:bookingId", Authmiddleware,AuthorizeRoles("admin", "organizer"), cancelBooking);

//get all the bookings by admin
router.get("/all-bookings",Authmiddleware,AuthorizeRoles("admin", "organizer"),getAllBookings)


module.exports = router;