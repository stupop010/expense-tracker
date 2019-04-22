const keys = require("../config/key");
const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  // if a req.user set by google outh, we just send it back
  if (req.user) return res.send(req.user);

  const token = req.header("x-auth-token");
  // Check for token
  if (!token) return res.status(401);

  try {
    // Verify token
    const decoded = jwt.verify(token, keys.cookieKey);
    // Add user from payload
    req.user = decoded;
    next();
  } catch (e) {
    res.status(400).json({ msg: "Token is not valid" });
  }
}

module.exports = auth;
