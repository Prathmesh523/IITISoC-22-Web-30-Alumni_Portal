const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    name: {
        type: String
    },
    date: {
        type: Date
    },
    time: {
        type: String
    },
    duration: {
        type: String
    },
    platform: {
        type: String
    },
    venue: {
        type: String
    },
    city: {
        type: String
    },
    email: {
        type: String
    },
    photo: {
        data: String,
        contentType: String
    },
    description: {
        type: String
    },
});

const Event = mongoose.model("events", eventSchema);
module.exports = Event;