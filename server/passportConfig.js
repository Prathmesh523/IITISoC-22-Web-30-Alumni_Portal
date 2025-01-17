const User = require("./models/Users");
const bcrypt = require("bcryptjs");
const localStrategy = require("passport-local").Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;

module.exports = function (passport) {
  passport.use(
    new localStrategy((username, password, done) => {
      User.findOne({ username: username }, (err, user) => {
        if (err) throw err;
        if (!user) return done(null, false);
        bcrypt.compare(password, user.password, (err, result) => {
          if (err) throw err;
          if (result === true) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        });
      });
    })
  );

  passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:8080/auth/google/signup",
    userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
  },
    function (accessToken, refreshToken, profile, cb) {
      User.findOne({ googleId: profile.id }, (err, user) => {
        if (user) {
          return cb(null, user);
        } else {
          const newUser = new User({
            googleId: profile.id,
            name: profile.displayName,
            profile: profile.photos[0].value,
            username: profile.emails[0].value,
            email: profile.emails[0].value,
            status: "student"
          });
          newUser.save();
          return cb(null, newUser);
        }
      });
    }
  ));

  passport.use(new FacebookStrategy({
    clientID: process.env.APP_ID,
    clientSecret: process.env.APP_SECRET,
    callbackURL: "http://localhost:8080/auth/facebook/signup"
  },
    function (accessToken, refreshToken, profile, cb) {
      User.findOne({ facebookId: profile.id }, (err, user) => {
        if (user) {
          return cb(null, user);
        } else {
          const newUser = new User({
            facebookId: profile.id,
            name: profile.displayName,
            status: "student"
          });
          newUser.save();
          return cb(null, newUser);
        }
      });
    }
  ));

  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  });
  passport.deserializeUser((id, cb) => {
    User.findOne({ _id: id }, (err, user) => {
      if (user) {
        const userInformation = {
          username: user.username,
        };
        cb(err, userInformation);
      } else {
        cb(null, "Not Google")
      }
    });
  });
};