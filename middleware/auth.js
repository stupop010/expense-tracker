const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  if (req.user) return res.send(req.user);
  const token = req.header("x-auth-token");
  console.log(token);
  next();
}

module.exports = auth;
