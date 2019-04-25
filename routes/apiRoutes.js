const express = require("express");
const router = express.Router();
const passport = require("passport");

// Local passport auth
router.post("/login", function(req, res, next) {
  passport.authenticate("local", function(err, user, info) {
    if (err) {
      return next(err);
    }
    if (info) {
      return res.status(400).json(info);
    }
    req.logIn(user, function(err) {
      if (err) {
        return next(err);
      }
      return res.send(req.user);
    });
  })(req, res, next);
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
