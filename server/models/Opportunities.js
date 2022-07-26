const mongoose = require("mongoose");

const opportunitiesSchema = new mongoose.Schema({
    type: {
        type: String
    },
    title: {
        type: String
    },
    name: {
        type: String
    },
    location: {
        type: String
    },
    deadline: {
        type: Date
    },
    salary: {
        type: String
    },
    applicants: {
        type: Number,
        default: 0
    },
    duration: {
        type: String
    },
    startDate: {
        type: Date
    },
    about: {
        type: String
    },
    description: {
        type: String
    },
    by: {
        type: String
    },
    publishedOn: {
        type: String
    }
});

const Opportunities = mongoose.model("opportunities", opportunitiesSchema);
module.exports = Opportunities;