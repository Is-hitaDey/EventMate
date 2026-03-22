const Booking = require("../models/Booking");

// Create Booking
exports.createBooking = async (req, res) => {
  try {
    const booking = await Booking.create({
      user: req.user._id,
      event: req.body.event,
      tickets: req.body.tickets,
      totalPrice: req.body.totalPrice,
    });

    res.status(201).json({
      success: true,
      booking,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get User Bookings
exports.getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user._id })
      .populate("event");

    res.status(200).json({
      success: true,
      bookings,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Bookings (Admin)
exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate("user")
      .populate("event");

    res.status(200).json({
      success: true,
      bookings,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};