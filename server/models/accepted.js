const mongoose = require('mongoose')

const acceptedSchema = new mongoose.Schema({
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
        default: true
    },
    isProcessed: {
        type: Boolean,
        default: true,
    }
})

const Accepted = mongoose.model('Accepted', acceptedSchema)
module.exports.Accepted = Accepted