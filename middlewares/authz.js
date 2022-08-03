const User = require('../models/user')
const { verifyToken } = require('../utils/token')

const authzMiddleware = async (req, res, next) => {
  const auth = req.headers.authorization

  if (!auth || !auth.startsWith('Bearer ')) {
    return res.status(401).json({
      msg: 'Unauthorized access'
    })
  }
  const token = auth.split(' ')[1]
  try {
    const { username, email } = verifyToken(token)

    const verifiedUser = await User.findOne({
      where: {
        username
      }
    })

    if (!verifiedUser) {
      return res.status(401).json({
        msg: 'Unauthorized User'
      })
    }
    req.user = { username, email }
    return next()
  } catch (error) {
    return res.status(401).json({
      msg: 'Invalid Token'
    })
  }
}

module.exports = authzMiddleware
