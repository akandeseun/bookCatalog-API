const jwt = require("jsonwebtoken");

const createJWT = (user) => {
  const { username, email } = user;
  const token = jwt.sign({ username, email }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
  return token;
};

const verifyToken = (token) => {
  const tokenObject = jwt.verify(token, process.env.JWT_SECRET);
  return tokenObject;
};

module.exports = { createJWT, verifyToken };
