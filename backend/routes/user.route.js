const userRouter = require('express').Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../models/user.model')
const { getTokenFrom } = require('./reqHelper')

userRouter.post('/', async (req, res) => {
    const hash = await bcrypt.hash(req.body.password, 10)

    const newUser = new User({
        password: hash,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
    })

    const savedUser = await newUser.save()
    res.json(savedUser)
})

userRouter.get('/', async (req, res) => {
    const users = await User
        .find({})

    res.json(users.map(u => u.toJSON()))
})

userRouter.get('/:username', async (req, res) => {
    const token = getTokenFrom(req)

    const decodedToken = jwt.verify(token, process.env.SECRET)

    if (!token || !decodedToken) {
        return res.status(401).json({ error: 'token missing or invalid' })
    }

    const user = await User
        .findOne({ username: req.params.username })

    res.json(user.toJSON())
})


module.exports = userRouter