const express = require("express");
const router = express.Router();
const passport = require("passport");

// Local passport auth
router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) return next(err);

    if (info) return res.status(400).json(info);

    req.logIn(user, err => {
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
  if (req.user) return res.send(req.user);

  return res.status(500);
});

module.exports = router;
