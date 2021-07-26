const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    jobName: {
        type: String,
        required: true
    },
    jobDescription: {
        type: String,
        required: false
    },
    company: {
        type: String,
        required: true
    },
    applyDate: {
        type: Date,
        required: true,
        default: Date.now
    }
} )

module.exports = mongoose.model('Application', applicationSchema);