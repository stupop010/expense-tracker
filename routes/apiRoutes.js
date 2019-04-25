const express = require("express");
const router = express.Router();
const passport = require("passport");

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
router.get("/user", async (req, res) => {
  if (req.user) {
    return res.send(req.user);
  } else {
    return res.status(401);
  }
});

module.exports = router;
