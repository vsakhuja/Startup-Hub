const express = require('express');
const router = express.Router();
const { Accepted } = require('../../models/accepted')
const { Rejected } = require('../../models/rejected')
const { Approval } = require('../../models/approvalRequest')

router.get('/accepted', async (req, res) => {
    try {
        data = await Accepted.find({})
        res.send(data)
    } catch (error) {
        res.send(error.message)
    }
})
router.get('/rejected', async (req, res) => {
    try {
        data = await Rejected.find({})
        res.send(data)
    } catch (error) {
        res.send(error.message)
    }
})

router.post('/', async (req, res) => {
    try {
        const oper = await Approval.deleteOne({ _id: req.body._id })
        const { _id, ...data } = req.body
        if (req.body.isApproved) {
            const request = new Accepted(data)
            await request.save()
            res.send(request)
        } else {
            const request = new Rejected(data)
            await request.save()
            res.send(request)
        }
    } catch (error) {
        console.log(error.message)
    }
})

module.exports = router