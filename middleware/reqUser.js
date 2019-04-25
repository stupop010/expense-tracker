module.exports = (req, res, next) => {
  console.log(req.isAuthenticated());
  next();
};
