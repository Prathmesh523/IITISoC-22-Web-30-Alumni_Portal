const mongoose = require("mongoose");

const AuthSchema = new mongoose.Schema({
    email: {
        type: String
    },
    username: {
        type: String
    },
    name: {
        type: String
    },
    department: {
        type: String
    },
    course: {
        type: String
    },
    yearOfGraduation: {
        type: Number
    }
});

const Authlist = mongoose.model("authlists", AuthSchema);
module.exports = Authlist;