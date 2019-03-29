const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  googleId: String,
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: String,
  register_date: {
    type: Date,
    default: Date.now
  }
});

mongoose.model("users", UserSchema);
