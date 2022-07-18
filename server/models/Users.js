const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    photo: {
        img:
        {
            data: Buffer,
            contentType: String
        }
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
        email: {
            type: String
        }
    },
    summary: {
        type: String
    },
    workExperience: {
        workTitle: {
            type: String
        },
        companyName: {
            type: String
        },
        workIndustry: {
            type: String
        },
        duration: {
            type: Number
        }
    },
    education: {
        instituteName: {
            type: String
        },
        startingYear: {
            type: Number
        },
        graduationYear: {
            type: Number
        },
        degree: {
            type: String
        },
        department: {
            type: String
        }
    }
});

const User = new mongoose.model("users", userSchema);
module.exports = User;