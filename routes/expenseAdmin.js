const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Expense = mongoose.model("expense");

const isAuthenticated = require("../middleware/isAuthenticated");

// @route   GET /expense-item/:id
// @desc    Find one expense & send it back
// @access  Private
router.get("/:id", isAuthenticated, async (req, res) => {
  try {
    const item = await Expense.findById(req.query.id);
    res.send(item);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Server Error" });
  }
});

module.exports = router;
