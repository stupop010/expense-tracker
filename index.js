const express = require("express");
const passport = require("passport");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const keys = require("./config/key");
const cookieSession = require("cookie-session");

require("./models/User");
require("./models/Expense");
require("./services/passport");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

// passport middleware
app.use(passport.initialize());
app.use(passport.session());

// routes
app.use("/api", require("./routes/apiRoutes.js"));
app.use("/auth", require("./routes/googleAuth.js"));
app.use("/register", require("./routes/registerRoutes.js"));
app.use("/expense", require("./routes/registerRoutes.js"));

mongoose
  .connect(keys.mongoDB, { useNewUrlParser: true })
  .then(() => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log("app running on port 5000");
    });
  })
  .catch(err => {
    console.log(err);
  });
