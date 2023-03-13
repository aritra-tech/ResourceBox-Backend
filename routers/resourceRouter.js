const express = require('express')
const router = express.Router()
const resourceControl = require('../controllers/resourceControl')

router.post('/addresource',resourceControl.addResource)

module.exports = router