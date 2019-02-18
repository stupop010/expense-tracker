const mongoose = require("mongoose");
const { Schema } = mongoose;

const ExpenseSchema = new Schema({
  category: String,
  price: Number,
  Description: String
});

mongoose.model("expense", ExpenseSchema);
