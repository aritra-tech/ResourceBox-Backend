const express = require('express')
const router = express.Router()
const resourceControl = require('../controllers/resourceControl')

router.post('/addResource',resourceControl.addResource)
router.get('/getResource',resourceControl.getAllResources)

module.exports = router