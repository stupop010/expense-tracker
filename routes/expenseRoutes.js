const mongoose = require("mongoose");

const Expense = mongoose.model("expense");

module.exports = app => {
  app.post("/expense/post", async (req, res) => {
    console.log(req.body);
    const { price, description, categries } = req.body;

    const expense = new Expense({
      price,
      description,
      category: categries,
      _user: req.user.id,
      date: Date.now()
    });

    const newExpense = await expense.save();
    res.send(newExpense);
  });

  app.get("/expense/all", async (req, res) => {
    const expense = await Expense.find({ _user: req.user.id });
    const newExpense = expense.slice(Math.max(expense.length - 5, 1));
    res.send(newExpense);
  });
};
