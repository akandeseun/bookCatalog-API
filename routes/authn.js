const express = require('express')
const {
  signUp,
  verifyUserEmail,
  signIn
} = require('../controllers/AuthnController')

const router = express.Router()

router.post('/signup', signUp)
router.get('/success/:token', verifyUserEmail)
router.post('/signin', signIn)

module.exports = router
