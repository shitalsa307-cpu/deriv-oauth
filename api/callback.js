export default function handler(req, res) {
  res.status(200).json({
    message: "OAuth Success",
    code: req.query.code,
    state: req.query.state,
    updated: true
  });
}
