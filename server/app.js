require('dotenv').config()
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const { cloudinary } = require('./utils/cloudinary');
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const bodyParser = require("body-parser");
const User = require("./models/Users");
const Event = require("./models/Events");
const Opportunities = require('./models/Opportunities');

const app = express();
app.use(express.json());
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static("public"));

mongoose.connect(process.env.MONGO_URL,
    { useNewUrlParser: true, useUnifiedTopology: true }, err => {
        console.log('connected')
    });

app.use(session({
    secret: "Our little secret.",
    resave: false,
    saveUninitialized: false
}));

app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
require("./passportConfig")(passport);

// User Requests:
app.post("/check-email", (req, res) => {
    const emailValue = req.body.email;
    User.findOne({ email: emailValue }, (err, person) => {
        if (!err) {
            if (person) {
                res.send("Found");
            } else {
                res.send("Not Found");
            }
        } else {
            console.log(err);
        }
    });
});

app.post("/add-user", (req, res) => {
    User.findOne({ username: req.body.email }, async (err, doc) => {
        if (err) throw err;
        if (doc) res.send("User Already Exists");
        if (!doc) {

            const hashedPassword = await bcrypt.hash(req.body.password, 10);

            const newUser = new User({
                username: req.body.email,
                password: hashedPassword,
                name: req.body.fname + " " + req.body.lname,
                email: req.body.email,
                status: "student"
            });
            await newUser.save();
            res.send("User Created");
        }
    });
});

app.post("/find-user", (req, res) => {
    console.log(req.body);
    User.findOne({ username: req.body.email }, async (err, doc) => {
        if (err) console.log(err);
        if (doc) {
            console.log(doc);
            res.send(doc);
        }
    });
});

app.post("/signup-data", (req, res) => {
    User.updateOne({ email: req.body.email }, {
        $set: {
            role: req.body.role,
            department: req.body.department,
            course: req.body.course,
            yearOfGraduation: req.body.graduation,
            yearOfJoining: req.body.joining,
            gender: req.body.gender,
            location: req.body.location,
            dob: req.body.dob
        }
    }, (err) => {
        if (err) console.log(err);
        else console.log("updated");
    });

    User.findOne({ email: req.body.email }, async (err, doc) => {
        if (err) console.log(err);
        if (doc) {
            res.send(doc);
        }
    });
});

app.get("/logout", function (req, res) {
    req.logout(function (err) {
        if (err) { return next(err); }
        else {
            console.log("Successfully Logged out!");
        }
    });
});

app.post("/login-user", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
        if (err) throw err;
        if (!user) res.send("Wrong");
        else {
            req.logIn(user, (err) => {
                if (err) throw err;
                else {
                    res.json(req.user);
                    console.log("Successfully Authenticated");
                }
            });
        }
    })(req, res, next);
});


app.post("/settings-data", (req, res) => {
    User.updateOne({ username: req.body.username }, {
        $set: {
            department: req.body.department,
            email: req.body.email,
            course: req.body.course,
            yearOfGraduation: req.body.graduation,
            yearOfJoining: req.body.joining,
            name: req.body.fname + " " + req.body.lname,
            phone: req.body.mobile
        }
    }, (err) => {
        if (err) console.log(err);
        else console.log("updated");
    });

    User.findOne({ username: req.body.username }, async (err, doc) => {
        if (err) console.log(err);
        if (doc) {
            res.send(doc);
            // console.log(doc);
        }
    });
});

app.get("/opportunities-data", (req, res) => {
    Opportunities.find({}, (err, jobs) => {
        if (err) console.log(err);
        else res.json(jobs);
    });
});

app.post("/opportunities-data", (req, res) => {
    const data = new Opportunities(req.body);
    data.save();
    Opportunities.find({}, (err, jobs) => {
        if (err) console.log(err);
        else {
            res.json(jobs);
            console.log(jobs);
        }
    });
});

app.post("/profile-data", (req, res) => {
    User.updateOne({ username: req.body.username }, {
        $set: {
            skills: req.body.skills,
            location: req.body.location,
            hometown: req.body.hometown,
            gender: req.body.gender,
            marriageStatus: req.body.maritalstatus,
            dob: req.body.dob,
            summary: req.body.summary
        }
    }, async (err) => {
        if (err) console.log(err);
        else console.log("updated");
    });

    User.findOne({ username: req.body.username }, async (err, doc) => {
        if (err) console.log(err);
        if (doc) {
            res.send(doc);
            console.log(doc);
        }
    });
});


app.post("/profile-data-work", (req, res) => {
    console.log(req.body);
    User.updateOne({ username: req.body.username }, {
        $push: {
            workExperience: {
                workTitle: req.body.workTitle,
                companyName: req.body.companyName,
                workIndustry: req.body.workIndustry,
                duration: req.body.duration
            }
        }
    }, (err) => {
        if (err) console.log(err);
        else console.log("updated");
    });

    User.findOne({ username: req.body.username }, async (err, doc) => {
        if (err) console.log(err);
        if (doc) {
            res.send(doc);
        }
    });
});

app.post("/profile-data-education", (req, res) => {
    console.log(req.body);
    User.updateOne({ username: req.body.username }, {
        $push: {
            education: {
                instituteName: req.body.instituteName,
                startYear: req.body.startYear,
                gradYear: req.body.gradYear,
                degree: req.body.degree,
                department: req.body.department
            }
        }
    }, (err) => {
        if (err) console.log(err);
        else console.log("updated");
    });

    User.findOne({ username: req.body.username }, async (err, doc) => {
        if (err) console.log(err);
        if (doc) {
            res.send(doc);
        }
    });
});

// Events Request

app.get("/getEvents", (req, res) => {
    Event.find({}, (err, events) => {
        if (err) console.log(err);
        else res.json(events);
    });
});

app.post("/addEvent", async (req, res) => {
    try {
        const newEvent = new Event({
            name: req.body.name,
            date: req.body.sdate,
            time: req.body.stime,
            duration: req.body.duration,
            platform: req.body.platform,
            venue: req.body.venue,
            city: req.body.city,
            email: req.body.email,
            description: req.body.description,
            photo: {
                data: req.body.file,
                contentType: 'image/png'
            }
        })
        newEvent.save()
        .then(() => res.send("Successfully Uploaded"))
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Something went wrong' });
    }
})

app.listen(8080, function () {
    console.log("Server started on port 8080.");
});