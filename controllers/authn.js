const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const signUp = async (req, res) => {
  const { username, email, password } = req.body;
  // validate
  if (!username || !email || !password) {
    return res.status(400).json({
      msg: "Please fill all fields",
    });
  }
  // hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  // body Object
  const bodyObject = {
    username: username,
    email: email,
    password: hashedPassword,
  };

  const user = await User.create(bodyObject);
  const token = jwt.sign({ username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  res.status(201).json({
    data: user,
    token,
  });
};

const signIn = async (req, res) => {
  const { username, email, password } = req.body;
  const bodyObject = {};
  if (username) {
    bodyObject.username = username;
  }
  if (email) {
    bodyObject.email = email;
  }
  const user = await User.findOne({ where: bodyObject });
  const payload = {
    username: user.username,
    email: user.email,
  };
  // password from db
  const userPassword = user.password;
  const comparePassword = await bcrypt.compare(password, userPassword);
  if (!comparePassword) {
    return res.status(400).json({
      msg: "Incorrect username or password",
    });
  }
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  res.status(200).json({
    msg: `Welcome ${payload.username}`,
    token,
  });
};

module.exports = { signUp, signIn };
