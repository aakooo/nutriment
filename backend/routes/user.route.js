const userRouter = require('express').Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../models/user.model')
const Team = require('../models/team.model')
const { getTokenFrom } = require('./reqHelper')

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

const removeUnwanted = userObject => {
    userObject.teams = userObject.teams.map(t => {
        return {
            id: t._id,
            name: t.name,
            admin: t.admin.username,
            members: t.members.length,
            createdAt: t.createdAt,
        }
    })

    console.log(userObject)
    return userObject
}

userRouter.get('/:username', async (req, res) => {
    const token = getTokenFrom(req)

    const decodedToken = jwt.verify(token, process.env.SECRET)

    if (!token || !decodedToken) {
        return res.status(401).json({ error: 'token missing or invalid' })
    }

    const user = await User
        .findOne({ username: req.params.username })
        .populate({
            path: 'teams',
            populate: {
                path: 'admin',
                model: 'User',
            }
        })
    
    const toReturn = removeUnwanted(user.toJSON())

    res.json(toReturn)
})

//Errors yet to be cleared in this route
userRouter.put('/', async (req, res) => {
    const body = req.body
    const token = getTokenFrom(req)

    const decodedToken = jwt.verify(token, process.env.SECRET)

    if (!token || !decodedToken) {
        return res.status(401).json({ error: 'token missing or invalid' })
    }

    const toUpdate = {
        username: body.username,
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        phone: body.phone,
        teams: body.teams,
    }

    const updatedUser = await User.findByIdAndUpdate(token.id, toUpdate)
    console.log('Database return', updatedUser);

    res.json(toUpdate)
})

module.exports = userRouter