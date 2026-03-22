const Review = require("../models/Review");

// Add Review
exports.createReview = async (req, res) => {
  try {
    const { rating, comment, eventId } = req.body;

    const review = await Review.create({
      user: req.user._id,
      event: eventId,
      rating,
      comment,
    });

    res.status(201).json({
      success: true,
      review,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Event Reviews
exports.getEventReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ event: req.params.eventId })
      .populate("user", "name");

    res.status(200).json({
      success: true,
      reviews,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};