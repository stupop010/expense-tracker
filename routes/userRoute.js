const mongoose = require("mongoose");
const User = mongoose.model("users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const keys = require("../config/key");

module.exports = app => {
  app.post("/user/reg", async (req, res) => {
    console.log("im herre");
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ msg: "Please enter all fields" });
    }
    User.findOne({ email }).then(user => {
      if (!user) return res.status(400).json({ msg: "User Does not exist" });
      bcrypt.compare(password, user.password).then(matched => {
        if (!matched)
          return res.status(400).json({ msg: "Invalid credentials" });
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
};
