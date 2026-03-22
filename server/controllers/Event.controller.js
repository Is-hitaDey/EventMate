const Event = require("../models/Event");
const { ApiError } = require("../utils/ApiError");
const { AsyncHandler } = require("../utils/AsyncHandler");


/* CREATE EVENT */

const createEvent = AsyncHandler(async (req, res) => {

    const {
        title,
        description,
        location,
        date,
        price,
        totalSeats,
        category
    } = req.body;

    if (!title || !description || !location || !date || !totalSeats) {
        throw new ApiError(400, "Please provide all required fields");
    }

    const event = await Event.create({
        title,
        description,
        location,
        date,
        price,
        totalSeats,
        category,
        createdBy: req.user._id
    });

    return res.status(201).json({
        message: "Event created successfully",
        event
    });
});


/* GET ALL EVENTS */
const getAllEvents = AsyncHandler(async (req, res) => {

    const events = await Event.find()
        .populate("createdBy", "name email")
        .sort({ createdAt: -1 });

    return res.status(200).json({
        message: "Events fetched successfully",
        events
    });
});


/* GET SINGLE EVENT */

const getSingleEvent = AsyncHandler(async (req, res) => {

    const { id } = req.params;

    const event = await Event.findById(id)
        .populate("createdBy", "name email");

    if (!event) {
        throw new ApiError(404, "Event not found");
    }

    return res.status(200).json({
        message: "Event fetched successfully",
        event
    });
});


/*  UPDATE EVENT */

const updateEvent = AsyncHandler(async (req, res) => {

    const { id } = req.params;

    const event = await Event.findById(id);

    if (!event) {
        throw new ApiError(404, "Event not found");
    }

    // Only admin or event creator can update
    if (
        req.user.role !== "admin" &&
        event.createdBy.toString() !== req.user._id.toString()
    ) {
        throw new ApiError(403, "You are not allowed to update this event");
    }

    const updatedEvent = await Event.findByIdAndUpdate(
        id,
        req.body,
        { new: true, runValidators: true }
    );

    return res.status(200).json({
        message: "Event updated successfully",
        event: updatedEvent
    });
});


/* DELETE EVENT */
const deleteEvent = AsyncHandler(async (req, res) => {

    const { id } = req.params;

    const event = await Event.findById(id);

    if (!event) {
        throw new ApiError(404, "Event not found");
    }

    // Only admin or creator can delete
    if (
        req.user.role !== "admin" &&
        event.createdBy.toString() !== req.user._id.toString()
    ) {
        throw new ApiError(403, "You are not allowed to delete this event");
    }

    await event.deleteOne();

    return res.status(200).json({
        message: "Event deleted successfully"
    });
});


module.exports = {
    createEvent,
    getAllEvents,
    getSingleEvent,
    updateEvent,
    deleteEvent
};