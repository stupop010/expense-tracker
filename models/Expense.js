const mongoose = require("mongoose");
const { Schema } = mongoose;

const ExpenseSchema = new Schema({
  _user: {
    type: Schema.Types.ObjectId,
    ref: "user"
  },
  category: String,
  price: Number,
  description: String,
  date: Date
});

mongoose.model("expense", ExpenseSchema);
