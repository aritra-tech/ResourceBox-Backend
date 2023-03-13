const express = require('express')
const router = express.Router()
const userControl = require('../controllers/userControl')

// Public Routes
router.post('/register',userControl.userRegistration)
router.post('/login',userControl.userLogin)
// Private Routes

module.exports = router