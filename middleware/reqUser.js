module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(401).sendsend({ error: "You must be log in!" });
  }
  next();
};
