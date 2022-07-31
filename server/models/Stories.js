const mongoose = require("mongoose");

const storySchema = new mongoose.Schema({
    title: {
        type: String
    },
    publishDate: {
        type: Date
    },
    highlight: {
        type: String
    },
    description: {
        type: String
    },
    category: {
        type: String
    },
    by: {
        type: String
    },
    photo: {
        type: String
    },
    status: {
        type: String
    }
});

const Story = mongoose.model("stories", storySchema);
module.exports = Story;