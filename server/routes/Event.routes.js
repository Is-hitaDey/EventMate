const router = require("express").Router();

const {
    createEvent,
    updateEvent,
    deleteEvent,
    getAllEvents,
    getSingleEvent
} = require("../controllers/eventController");

const Authmiddleware = require("../middleware/Authmiddleware");
const AuthorizeRoles = require("../middleware/AuthorizeRoles");


// Public Routes
router.get("/", getAllEvents);
router.get("/:id", getSingleEvent);


// Protected Routes

// Create Event
router.post(
    "/create",
    Authmiddleware,
    AuthorizeRoles("admin", "organizer"),
    createEvent
);

// Update Event
router.put(
    "/update/:id",
    Authmiddleware,
    AuthorizeRoles("admin", "organizer"),
    updateEvent
);

// Delete Event
router.delete(
    "/delete/:id",
    Authmiddleware,
    AuthorizeRoles("admin", "organizer"),
    deleteEvent
);

module.exports = router;