const express = require("express");
const router = express.Router();
const passport = require("passport");
const mongoose = require("mongoose");

const auth = require("../middleware/auth");
const User = mongoose.model("users");

// Local passport auth
router.post("/login", passport.authenticate("local"), (req, res) => {
  res.send(req.user);
});

// Logout
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

// find the current user
router.get("/user", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");
    res.send(user);
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

module.exports = router;
