const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const User = mongoose.model("users");

router.post("/user", async (req, res) => {
  const { username, email, password } = req.body;

  // simple validation check
  if (!username || !email || !password) {
    res.status(400).json({ msg: "Please enter all fields" });
  }
  try {
    let user = await User.findOne({ email });

    if (user) res.status(400).json({ msg: "User already exists" });

    user = new User({
      username,
      password,
      email
    });

    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(password, salt);

    await user.save();

    res.json({ message: "You are now registered and can log in" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;
