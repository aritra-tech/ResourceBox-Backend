const express = require('express')
const router = express.Router()
const userControl = require('../controllers/userControl')

// Public Routes
router.post('/register',userControl.userRegistration)
// Private Routes

module.exports = router