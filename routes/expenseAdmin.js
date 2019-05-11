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

// @route  PUT /expense-item/patch
// @desc   Find expense and update it
// @access Private
router.put("/patch", isAuthenticated, async (req, res) => {
  try {
    const { description, price, category, id } = req.body.data;

    await Expense.findOneAndUpdate(
      { _id: id },
      {
        $set: { description, price, category }
      },
      { new: true }
    );
    res.json({ msg: "Success updated" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Server Error" });
  }
});

// @route  DELETE /expense-item/delete
// @desc   Find one and delete
// @access Private
router.delete("/delete", isAuthenticated, async (req, res) => {
  try {
    const id = req.body.id;
    await Expense.findByIdAndDelete(id);
    res.json({ msg: "Success Deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

module.exports = router;
