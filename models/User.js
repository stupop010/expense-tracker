const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  username: String,
  googleId: String
});

mongoose.model("users", UserSchema);
