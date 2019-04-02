const mongoose = require("mongoose");
const _ = require("lodash");

const Expense = mongoose.model("expense");
const slice_reverse = require("../utils/sliceReverse");

module.exports = app => {
  app.post("/expense/post", async (req, res) => {
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
      res.status(400).send(e);
    }
  });

  // Route to get the 5 most recent
  app.get("/expense/get_5", async (req, res) => {
    try {
      const expense = await Expense.find({ _user: req.user.id });
      const revExpense = slice_reverse(expense);
      if (_.isEmpty(revExpense)) {
        res.status(400).json({ message: "No expense to show." });
      }
      res.send(revExpense);
    } catch (e) {
      console.log(e);
      res.send(e);
    }
  });

  // Route to Pagination
  app.get("/expense/all", async (req, res) => {
    try {
      const expense = await Expense.find({ _user: req.user.id })
        .sort({ date: -1 })
        .limit(parseInt(req.query.limit))
        .skip(parseInt(req.query.skip));
      res.json(expense);
    } catch (e) {
      res.send();
    }
  });
};
