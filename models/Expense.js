const mongoose = require("mongoose");
const { Schema } = mongoose;

const ExpenseSchema = new Schema({
  category: String,
  price: Number,
  description: String,
  _user: String,
  date: Date
});

mongoose.model("expense", ExpenseSchema);
