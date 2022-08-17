require('dotenv').config()
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const bodyParser = require("body-parser");
const Jwt = require("jsonwebtoken");
const User = require("./models/Users");
const Event = require("./models/Events");
const Story = require("./models/Stories");
const Gallery = require("./models/Gallery");
const Authlist = require("./models/Authlist");
const Opportunities = require('./models/Opportunities');

const app = express();
app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000", // allow to server to accept request from different origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // allow session cookie from browser to pass through
}));

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

app.use(cookieParser("Our little secret."));
app.use(passport.initialize());
app.use(passport.session());
require("./passportConfig")(passport);

app.get("/login/success", (req, res) => {
    if (req.user) {
        User.findOne({ username: req.user.username }, (err, user) => {
            console.log(user);
            if (err) console.log(err);
            if (user) res.send(user);
        })
    } else{
        res.redirect("/login/success");
    }
});
app.get("/login/failed", (req, res) => {
    res.status(401).json({
        success: false,
        message: "failure",
    });
});

app.get('/auth/google',
    passport.authenticate('google', {
        scope: ['https://www.googleapis.com/auth/userinfo.profile',
            'https://www.googleapis.com/auth/userinfo.email']
    }));

app.get('/auth/google/signup',
    passport.authenticate('google', { failureRedirect: "/login/failed" }), (req,res) => {
        const user = req.user;
        Jwt.sign({user}, process.env.KEY, (err, token) => {
            res.redirect("http://localhost:3000/login?user="+token);
        })
    });

app.get('/auth/facebook',
    passport.authenticate('facebook'));

app.get('/auth/facebook/signup',
    passport.authenticate('facebook', { failureRedirect: "/login/failed"}), (req,res) => {
        const user = req.user;
        Jwt.sign({user}, process.env.KEY, (err, token) => {
            res.redirect("http://localhost:3000/login?user="+token);
        })
    });

app.post("/addAuth", (req, res) => {
    Authlist.findOne({ username: req.body.username }, (err, list) => {
        if (err) console.log(err);
        else {
            if (!list) {
                const newlist = new Authlist({
                    username: req.body.username,
                    email: req.body.email,
                    name: req.body.name,
                    department: req.body.department,
                    course: req.body.course,
                    yearOfGraduation: req.body.yearOfGraduation
                });
                newlist.save();
            }
        }
    });
});

app.get("/getAuthlist", (req, res) => {
    Authlist.find({}, (err, list) => {
        if (err) console.log(err);
        else res.json(list);
    });
});

app.post("/changeStatus", async (req, res) => {
    console.log(req.body);
    if (req.body.type === "accept") {
        User.findOneAndUpdate({ username: req.body.username }, {
            $set: {
                status: "alumni"
            }
        }, (err) => {
            if (err) console.log(err);
        });
    }
    Authlist.findOneAndDelete({ username: req.body.username }, (err) => {
        if (err) console.log(err);
    });
});

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

app.post("/signup-data", async (req, res) => {
    const doc = await User.findOneAndUpdate({ _id: req.body.id }, {
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
    }, { new: true });

    res.send(doc);
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


app.post("/settings-data", async (req, res) => {
    const doc = await User.findOneAndUpdate({ username: req.body.username }, {
        $set: {
            department: req.body.department,
            email: req.body.email,
            course: req.body.course,
            yearOfGraduation: req.body.graduation,
            yearOfJoining: req.body.joining,
            name: req.body.fname + " " + req.body.lname,
            phone: req.body.mobile
        }
    }, { new: true });

    res.send(doc);
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
app.post("/add-network", async (req, res) => {
    const doc = await User.findOneAndUpdate({ username: req.body.username }, {
        $push: {
            network: req.body.data
        }
    }, { new: true });
    res.send(doc);
})
app.post("/add-profile", async (req, res) => {
    const doc = await User.findOneAndUpdate({ username: req.body.username }, {
        $set: {
            profile: req.body.file
        }
    }, { new: true });

    res.send(doc);
})
app.post("/profile-data", async (req, res) => {
    const doc = await User.findOneAndUpdate({ username: req.body.username }, {
        $set: {
            skills: req.body.skills,
            location: req.body.location,
            hometown: req.body.hometown,
            gender: req.body.gender,
            marriageStatus: req.body.maritalstatus,
            dob: req.body.dob,
            summary: req.body.summary
        }
    }, { new: true });

    res.send(doc);
});


app.post("/profile-data-work", async (req, res) => {
    const doc = await User.findOneAndUpdate({ username: req.body.username }, {
        $push: {
            workExperience: {
                workTitle: req.body.workTitle,
                companyName: req.body.companyName,
                workIndustry: req.body.workIndustry,
                duration: req.body.duration
            }
        }
    }, { new: true });

    res.send(doc);
});

app.post("/profile-data-education", async (req, res) => {
    const doc = await User.findOneAndUpdate({ username: req.body.username }, {
        $push: {
            education: {
                instituteName: req.body.instituteName,
                startYear: req.body.startYear,
                gradYear: req.body.gradYear,
                degree: req.body.degree,
                department: req.body.department
            }
        }
    }, { new: true });

    res.send(doc);
});

// Events Request

app.get("/getEvents", (req, res) => {
    Event.find({}, (err, events) => {
        if (err) console.log(err);
        else res.json(events);
    });
});
app.get("/getStory", (req, res) => {
    Story.find({}, (err, stories) => {
        if (err) console.log(err);
        else res.json(stories);
    });
});

app.get("/getGallery", (req, res) => {
    Gallery.find({}, (err, pic) => {
        if (err) console.log(err);
        else res.json(pic);
    });
});

app.get("/getUser", (req, res) => {
    User.find({}, (err, pic) => {
        if (err) console.log(err);
        else res.json(pic);
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
});

app.post("/addStory", async (req, res) => {
    try {
        const newStory = new Story({
            title: req.body.title,
            publishDate: req.body.publishDate,
            highlight: req.body.highlight,
            description: req.body.description,
            category: req.body.category,
            by: req.body.by,
            photo: req.body.photo,
            status: req.body.status
        })
        newStory.save()
            .then(() => res.send("Successfully Uploaded"))
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Something went wrong' });
    }
});
app.post("/addAlbum", async (req, res) => {
    try {
        const newGallery = new Gallery({
            name: req.body.name,
            date: req.body.date,
            by: req.body.by
        });
        newGallery.photos.push(req.body.photos);
        newGallery.save()
            .then(() => res.send("Successfully Uploaded"))
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Something went wrong' });
    }
});

app.listen(8080, function () {
    console.log("Server started on port 8080.");
});