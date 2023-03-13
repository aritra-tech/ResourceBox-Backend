const mongoose = require('mongoose')

const resourcesSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
    },
    resourceName: {
        type: String,
        required: true,
    },
    resourceDescription: {
        type: String,
        required: true,
    },
    resourceLink: {
        type: String,
        required: true,
    },
})

const Resources = mongoose.model('Resource',resourcesSchema)
module.exports = Resources