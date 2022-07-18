require('dotenv').config()
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const bodyParser = require("body-parser");
const User = require("./models/Users");

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

app.get("/user", (req, res) => {
    res.send(req.user); // The req.user stores the entire user that has been authenticated inside of it.
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

app.post("/signup-data", (req, res) => {
    User.updateOne({ email: req.body.email },{$set: {
        role: req.body.role,
        department: req.body.department,
        course: req.body.course,
        yearOfGraduation: req.body.graduation,
        yearOfJoining: req.body.joining,
        gender: req.body.gender,
        location: req.body.location,
        dob: req.body.dob
    }}, (err) => {
        if(err) console.log(err);
        else console.log("updated");
    });

    User.findOne({ email: req.body.email }, async (err, doc) => {
        if (err) console.log(err);
        if (doc) {
            res.send(doc);
        }
    });
});

app.get("/logout", function(req,res){
    req.logout(function(err) {
        if (err) { return next(err); }
        else{
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
          else{
            res.json(req.user);
            console.log("Successfully Authenticated");}
        });
      }
    })(req, res, next);
  });

app.listen(8080, function () {
    console.log("Server started on port 8080.");
});