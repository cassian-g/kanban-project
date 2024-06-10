const checkMillionDollarIdea = (req, res, next) => {
  const val = Number(req.body.numWeeks) * Number(req.body.weeklyRevenue);
  if (val >= 1000000) {
    next();
  } else {
    res.status(400).send();
  }
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
