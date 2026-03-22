const router = require("express").Router();

const {
    createReview,
    getEventReviews,
    deleteReview
} = require("../controllers/reviewController");

const Authmiddleware = require("../middleware/Authmiddleware");


// Add review
router.post("/create/:eventId", Authmiddleware, createReview);

// Get reviews of event
router.get("/:eventId", getEventReviews);

// Delete review
router.delete("/delete/:reviewId", Authmiddleware, deleteReview);


module.exports = router;