const userRouter = require('express').Router()
const bcrypt = require('bcrypt')

const User = require('../models/user.model')

userRouter.post('/', async (req, res) => {
    const hash = await bcrypt.hash(req.body.password, 10)

    const newUser = new User({
        username: req.body.username,
        password: hash,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
        teams: [],
    })

    const savedUser = await newUser.save()
    res.json(savedUser)
})

userRouter.get('/', async (req, res) => {
    const users = await User
        .find({}).populate('teams')

    res.json(users.map(u => u.toJSON()))
})

userRouter.get('/:id', async (req, res) => {
    const id = req.params.id

    const user = await User
        .findById(id).populate('teams')

    res.json(user)
})

module.exports = userRouter