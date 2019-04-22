const _ = require("lodash");

module.exports = (expense, res) => {
  if (_.isEmpty(expense)) {
    res.status(400).json({ msg: "No expense to show, please add an expense" });
  } else {
    res.json(expense);
  }
};
