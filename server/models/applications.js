const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
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
    },
    status: {
        type: String,
        required: true,
        default: "Sent"
    },
    statusId: {
        type: Number,
        required: true,
        default: 0
    },
    country: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: false
    }
} )

module.exports = mongoose.model('Application', applicationSchema);