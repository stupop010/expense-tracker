const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const _ = require("lodash");

const Expense = mongoose.model("expense");
const slice_reverse = require("../utils/sliceReverse");

router.post("/post", async (req, res) => {
  const { price, description, categries } = req.body;

  const expense = new Expense({
    price,
    description,
    category: categries,
    _user: req.user.id,
    date: Date.now()
  });

  try {
    await expense.save();
    res.status(201).send(expense);
  } catch (e) {
    res.status(400).json({ msg: "Failed to add expense" });
  }
});

// Route to get the 5 most recent
router.get("/get_5", async (req, res) => {
  try {
    console.log("u");
    const expense = await Expense.find({ _user: req.user._id });
    const revExpense = slice_reverse(expense);
    if (_.isEmpty(revExpense)) {
      res
        .status(400)
        .json({ msg: "No expense to show, please add an expense" });
    } else {
      res.json(revExpense);
    }
  } catch (e) {
    res.status(400).json({ msg: "Can't fetch expenses" });
  }
});

// Route to Pagination
router.get("/all", async (req, res) => {
  try {
    const expense = await Expense.find({ _user: req.user.id })
      .sort({ date: -1 })
      .limit(parseInt(req.query.limit))
      .skip(parseInt(req.query.skip));
    res.json(expense);
  } catch (e) {
    res.status(400).json({
      msg: "Can't not retrieve expense"
    });
  }
});

module.exports = router;
