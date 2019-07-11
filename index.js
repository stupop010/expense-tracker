const express = require("express");
const passport = require("passport");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const keys = require("./config/key");
const session = require("express-session");
const connectDB = require("./config/db");

require("./models/User");
require("./models/Expense");
require("./services/passport");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
  session({
    secret: "secret",
    saveUninitialized: true,
    resave: true
  })
);

// passport middleware
app.use(passport.initialize());
app.use(passport.session());

// routes
app.use("/api", require("./routes/apiRoutes.js"));
app.use("/expense", require("./routes/expenseRoutes.js"));
app.use("/auth", require("./routes/googleAuth.js"));
app.use("/register", require("./routes/registerRoutes.js"));
app.use("/expense-item", require("./routes/expenseAdmin.js"));
app.use("/outgoing", require("./routes/monthlyOutgoingRoutes.js"));

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
