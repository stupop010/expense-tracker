const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

const User = mongoose.model("user");
const keys = require("../config/key");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  let user = await User.findById(id).select("-password");
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then(currentUser => {
        if (currentUser) {
        } else {
          new User({
            username: profile.displayName,
            googleId: profile.id,
            email: profile.emails[0].value
          })
            .save()
            .then(newUser => {
              done(null, newUser);
            });
        }
      });
    }
  )
);

passport.use(
  new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
    User.findOne({ email }).then(user => {
      if (!user) {
        return done(null, false, {
          msg: "Either the email or password is incorrected"
        });
      }
      bcrypt.compare(password, user.password, (err, success) => {
        if (success) {
          const newUser = {
            username: user.username,
            email: user.email,
            id: user.id,
            register_date: user.register_date
          };
          return done(null, newUser);
        } else {
          return done(null, false, {
            msg: "Either the email or password is incorrected"
          });
        }
      });
    });
  })
);
