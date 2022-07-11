const bcrypt = require("bcryptjs");
const User = require("../models/User");
const { createJWT } = require("../utils/token");
const { hashPassword, verifyPassword } = require("../utils/secure-user");

const signUp = async (req, res) => {
  const { username, email, password } = req.body;
  // validate
  if (!username || !email || !password) {
    return res.status(400).json({
      msg: "Please fill all fields",
    });
  }
  // hash password
  const securedPassword = await hashPassword(password);

  // user Details from req.body
  const userDetails = {
    username: username,
    email: email,
    password: securedPassword,
  };

  const user = await User.create(userDetails);
  const token = createJWT(user);
  res.status(201).json({
    msg: "Sign up successful",
    token,
  });
};

const signIn = async (req, res) => {
  const { username, email, password } = req.body;
  const userDetails = {};
  if (username) {
    userDetails.username = username;
  }
  if (email) {
    userDetails.email = email;
  }
  const user = await User.findOne({ where: userDetails });
  const userPassword = user.password;
  const isValid = await verifyPassword(password, userPassword);
  if (!isValid) {
    return res.status(400).json({
      msg: "Incorrect username or password",
    });
  }
  const token = createJWT(user);
  res.status(200).json({
    msg: `Welcome ${user.username}`,
    token,
  });
};

module.exports = { signUp, signIn };
