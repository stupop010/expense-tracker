const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const keys = require("../config/key");
const User = mongoose.model("users");

router.post("/user", async (req, res) => {
  const { username, email, password } = req.body;

  // simple validation check
  if (!username || !email || !password) {
    res.status(400).json({ msg: "Please enter all fields" });
  }
  User.findOne({ email }).then(user => {
    if (user) res.status(400).json({ msg: "User already exists" });

    const newUser = new User({
      username,
      password,
      email
    });

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, function(err, hash) {
        if (err) throw err;
        newUser.password = hash;
        newUser.save().then(user => {
          jwt.sign(
            { _id: user.id },
            keys.cookieKey,
            { expiresIn: "1h" },
            (err, token) => {
              res.json({
                token,
                user: {
                  _id: user.id,
                  username: user.username,
                  email: user.email
                }
              });
            }
          );
        });
      });
    });
  });
});

module.exports = router;
