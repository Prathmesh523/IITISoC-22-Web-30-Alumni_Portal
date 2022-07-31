const mongoose = require("mongoose");
const findOrCreate = require('mongoose-findorcreate')

const userSchema = new mongoose.Schema({
    profile: {
        type: String
    },
    status: {
        type: String
    },
    username: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    googleId: {
        type: String
    },
    facebookId: {
        type: String
    },
    linkedinId: {
        type: String
    },
    name: {
        type: String
    },
    role: {
        type: String
    },
    department: {
        type: String
    },
    course: {
        type: String
    },
    yearOfJoining: {
        type: Number
    },
    yearOfGraduation: {
        type: Number
    },
    gender: {
        type: String
    },
    location: {
        type: String
    },
    hometown: {
        type: String
    },
    dob: {
        type: Date
    },
    phone: {
        type: Number,
    },
    skills: {
        type: String
    },
    marriageStatus: {
        type: String
    },
    network: {
        type: Array,
        default: []
    },
    summary: {
        type: String
    },
    workExperience: {
        type: Array,
        default: []
    },
    education: {
        type: Array,
        default: []
    }
});

userSchema.plugin(findOrCreate);
const User = mongoose.model("users", userSchema);
module.exports = User;