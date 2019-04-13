const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const keys = require("../config/key");
const User = mongoose.model("users");

module.exports = app => {
  app.post("/register/user", async (req, res) => {
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

      bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.password, salt, function(err, hash) {
          if (err) throw err;
          newUser.password = hash;
          newUser.save().then(user => {
            jwt.sign(
              {
                id: user.id
              },
              keys.jwtSecret,
              { expiresIn: 3600 },
              (err, token) => {
                if (err) throw err;
                res.json({
                  token,
                  user: {
                    id: user.id,
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
};
