const jwt = require("jsonwebtoken");

const authzMiddleware = async (req, res, next) => {
  const auth = req.headers.authorization;

  if (!auth || !auth.startsWith("Bearer ")) {
    return res.status(401).json({
      msg: "Unauthorized access",
    });
  }
  const token = auth.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { username, email } = decoded;
    req.user = { username, email };
    next();
  } catch (error) {
    return res.status(401).json({
      msg: "Invalid Token",
    });
  }
};

module.exports = authzMiddleware;
