const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Expense = mongoose.model("expense");

const isAuthenticated = require("../middleware/isAuthenticated");
const slice_reverse = require("../utils/sliceReverse");

router.post("/post", isAuthenticated, async (req, res) => {
  const { price, description, categries } = req.body;

  if (!price || !description || !categries)
    return res.status(400).json({ msg: "please fill in all" });

  const expense = new Expense({
    price,
    description,
    category: categries,
    _user: req.user.id,
    date: Date.now()
  });

  try {
    await expense.save();
    res.status(201).json(expense);
  } catch (e) {
    res.status(500).json({ msg: "Server Error" });
  }
});

// Route to get the 5 most recent
router.get("/get_5", isAuthenticated, async (req, res) => {
  try {
    const expense = await Expense.find({ _user: req.user.id });
    const revExpense = slice_reverse(expense);
    console.log(revExpense);
    // check if the expense array is emtpy
    if (!Array.isArray(revExpense) || !revExpense.length) {
      return res.status(400).json({ msg: "Please add a expense" });
    }
    res.json(revExpense);
  } catch (e) {
    res.status(500).json({ msg: "Server Error" });
  }
});

// Route to Pagination
router.get("/all", isAuthenticated, async (req, res) => {
  try {
    const expense = await Expense.find({ _user: req.user.id })
      .sort({ date: -1 })
      .limit(parseInt(req.query.limit))
      .skip(parseInt(req.query.skip));

    if (!Array.isArray(expense) || !expense.length) {
      return res.status(400).json({ msg: "Please add a expense" });
    }

    res.json(expense);
  } catch (e) {
    res.status(500).json({
      msg: "Server Error"
    });
  }
});

module.exports = router;
