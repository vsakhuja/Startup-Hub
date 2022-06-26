const express = require('express')
const router = express.Router();
const { User } = require('../../models/user')

router.get('/', async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ email, password })
        if (user && user.isAdmin) {
            return res.send(true)
        } else {
            return res.send(false)
        }
    } catch (error) {
        res.send(error.message)
    }
})

router.post('/', async (req, res) => {
    const { email, password, isAdmin } = req.body
    try {
        const newUser = new User({
            email,
            password,
            isAdmin
        })
        await newUser.save()
        res.send(newUser)
    } catch (error) {
        res.send(error.message)
    }
})

module.exports = router;