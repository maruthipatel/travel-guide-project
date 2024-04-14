const jwt = require("jsonwebtoken");

exports.authenticate = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token)
    return res.status(401).json({ error: "Authorization token is required" });
  try {
    const decoded = jwt.verify(token, "secretKey");
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
};
