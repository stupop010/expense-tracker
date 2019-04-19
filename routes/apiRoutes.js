const express = require("express");
const router = express.Router();
const passport = require("passport");
const mongoose = require("mongoose");

const User = mongoose.model("users");

// Local passport auth
router.post("/reg", passport.authenticate("local"), (req, res) => {
  res.send(req.user);
});

// Logout
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

// find the current user
router.get("/user", (req, res) => {
  const id = req.user.id;
  if (id) {
    User.findById(id)
      .select("-password")
      .select("-googleId")
      .then(user => {
        res.send(user);
      });
  }
});

module.exports = router;
