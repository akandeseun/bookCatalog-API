const sgMail = require('@sendgrid/mail')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const { createJWT } = require('../utils/token')
const { hashPassword, verifyPassword } = require('../utils/secure-user')

const signUp = async (req, res) => {
  const { username, email, password } = req.body
  // validate
  if (!username || !email || !password || !req.body) {
    return res.status(400).json({
      msg: 'Please fill all fields'
    })
  }
  // hash password
  const securedPassword = await hashPassword(password)

  // user Details from req.body
  const userDetails = {
    username,
    email,
    password: securedPassword
  }

  const user = await User.create(userDetails)
  const token = createJWT(user)

  // email verification link
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const msg = {
    to: email,
    from: 'akandeseun44@gmail.com',
    subject: 'Verify your identity',
    text: 'Use the link to verify your identity',
    html: `<a href="http://localhost:3210/api/auth/success/${token}">here</a>`
  }
  await sgMail.send(msg)

  return res.status(201).json({
    msg: 'Verification link sent to your mail',
    token,
    user
  })
}

const verifyUserEmail = async (req, res) => {
  const { token } = req.params
  const tokenObject = jwt.verify(token, process.env.JWT_SECRET)
  const { username, email } = tokenObject

  const foundUser = await User.findOne({
    where: {
      username,
      email
    }
  })
  if (!foundUser) {
    return res.status(400).json({
      msg: 'Unauthorized user'
    })
  }
  await User.update(
    { verified: true },
    {
      where: {
        username
      }
    }
  )

  return res.status(200).json({
    msg: 'Verification successful, you can now proceed to sign in'
  })
}

const signIn = async (req, res) => {
  const { username, email, password } = req.body
  const userDetails = {}
  if (username) {
    userDetails.username = username
  }
  if (email) {
    userDetails.email = email
  }
  const user = await User.findOne({ where: userDetails })
  const userPassword = user.password
  const isVerified = user.verified
  const isValid = await verifyPassword(password, userPassword)
  if (!isValid) {
    return res.status(400).json({
      msg: 'Incorrect username or password'
    })
  }
  if (!isVerified) {
    return res.status(400).json({
      msg: 'Please verify your email to continue'
    })
  }
  const token = createJWT(user)
  return res.status(200).json({
    msg: `Welcome ${user.username}`,
    token
  })
}

module.exports = { signUp, verifyUserEmail, signIn }
