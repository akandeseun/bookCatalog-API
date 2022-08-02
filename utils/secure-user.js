const bcrypt = require('bcryptjs')

const hashPassword = async (userPassword) => {
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(userPassword, salt)
  return hashedPassword
}

const verifyPassword = async (typedPassword, dbPassword) => {
  const comparePassword = await bcrypt.compare(typedPassword, dbPassword)
  return comparePassword
}

module.exports = { hashPassword, verifyPassword }
