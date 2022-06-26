const express = require('express')
const router = express.Router();
const { Approval } = require('../../models/approvalRequest')
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.Mail,
        pass: process.env.Pass,
    }
})

const mailOption = {
    from: process.env.Mail,
    to: process.env.Mail,
    subject: "test",
    text: "test"
}





router.get('/', async (req, res) => {
    try {
        res.send(await Approval.find({}))
    } catch (error) {
        res.send(error.message);
    }
})

router.post('/', async (req, res) => {
    try {
        const request = new Approval({
            name: req.body.name,
            email: req.body.email,
            phonenumber: req.body.phonenumber,
            address: req.body.address,
            revenue: req.body.revenue,
            isApproved: false,
        })
        await request.save();
        res.send(request)
        transporter.sendMail(mailOption, (err, success) => {
            if (err) {
                console.log(err)
            } else {
                console.log(success)
            }
        })
    } catch (error) {
        res.send(error.message)
    }
})

module.exports = router