const express = require('express')
const router = express.Router()

// Import controller
const { signup, signin } = require('../controllers/auth')

router.post('/signup', signup)
router.post('/signin', signin)

module.exports = router
