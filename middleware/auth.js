const jwt = require("jsonwebtoken");
const keys = require("../config/key");

function auth(req, res, next) {
  if (req.user) return res.send(req.user);
  const token = req.header("x-auth-token");
  if (!token)
    return res.status(401).json({ msg: "No token, authorizaton denied" });

  try {
    const decoded = jwt.verify(token, keys.jwtSecret);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).json({ msg: "Token is not valid" });
  }
}

module.exports = auth;
