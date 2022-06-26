const mongoose = require('mongoose')

const rejectedSchema = new mongoose.Schema({
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
        default: true,
    }
})

const Rejected = mongoose.model('Rejected', rejectedSchema)
module.exports.Rejected = Rejected