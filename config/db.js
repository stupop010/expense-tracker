const mongoose = require("mongoose");

const keys = require("./key");

const connectDB = async () => {
  try {
    await mongoose.connect(keys.mongoDB, {
      useNewUrlParser: true,
      useCreateIndex: true
    });
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
