module.exports = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    return res.status(400).json({ msg: "Please log in the access this route" });
  }
};
