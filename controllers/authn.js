const bcrypt = require("bcryptjs");
const User = require("../models/User");
const createJWT = require("../utils/token");

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
  const token = createJWT(user);
  res.status(201).json({
    msg: "Sign up successful",
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
  const userPassword = user.password;
  const comparePassword = await bcrypt.compare(password, userPassword);
  if (!comparePassword) {
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
