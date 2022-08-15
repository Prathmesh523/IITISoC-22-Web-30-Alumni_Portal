const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema({
    name: {
        type: String
    },
    date: {
        type: Date
    },
    by: {
        type: String
    },
    photos: {
        type: Array,
        default: []
    }
});

const Gallery = mongoose.model("galleries", gallerySchema);
module.exports = Gallery;