const jwt = require("jsonwebtoken");

const createJWT = (user) => {
  const { username, email } = user;
  const token = jwt.sign({ username, email }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
  return token;
};

module.exports = createJWT;
