module.exports = (req, res) => {
  res.status(200).json({
    message: "OAuth Success",
    code: req.query.code || null,
    state: req.query.state || null
  });
};
