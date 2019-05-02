const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Expense = mongoose.model("expense");

const isAuthenticated = require("../middleware/isAuthenticated");
const slice_reverse = require("../utils/sliceReverse");
const isEmptyExpense = require("../utils/isEmptyExpense");

router.post("/post", isAuthenticated, async (req, res) => {
  const { price, description, categries } = req.body;

  if (!price || !description || !categries)
    return res.status(400).json({ msg: "please fill in all" });

  const expense = new Expense({
    price,
    description,
    category: categries,
    _user: req.body.id,
    date: Date.now()
  });

  try {
    await expense.save();
    res.status(201).json(expense);
  } catch (e) {
    res.status(400).json({ msg: "Failed to add expense" });
  }
});

// Route to get the 5 most recent
router.get("/get_5", isAuthenticated, async (req, res) => {
  try {
    const expense = await Expense.find({ _user: req.user.id });
    const revExpense = slice_reverse(expense);

    // check if the expense array is emtpy
    isEmptyExpense(revExpense, res);
  } catch (e) {
    res.status(400).json({ msg: "Can't fetch expenses" });
  }
});

// Route to Pagination
router.get("/all", isAuthenticated, async (req, res) => {
  try {
    const expense = await Expense.find({ _user: req.user.id })
      .sort({ date: -1 })
      .limit(parseInt(req.query.limit))
      .skip(parseInt(req.query.skip));
    // check if the expense array is empty
    isEmptyExpense(expense, res);
  } catch (e) {
    res.status(400).json({
      msg: "Can't not retrieve expense"
    });
  }
});

module.exports = router;
