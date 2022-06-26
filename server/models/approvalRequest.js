const mongoose = require('mongoose')

const requestSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        required: true,

    },
    phonenumber: {
        type: Number,
        required: true,

    },
    address: {
        type: String,
        required: true,

    },
    student: {
        type: Boolean,
        default: true,

    },
    revenue: {
        type: Number,
        required: true,

    },
    isApproved: {
        type: Boolean,
        default: false
    },
    isProcessed: {
        type: Boolean,
        default: false,
    }
})

const Approval = mongoose.model('ApprovalRequests', requestSchema)
module.exports.Approval = Approval