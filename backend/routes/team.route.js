const teamRouter = require('express').Router()

const mongoose = require('mongoose')
const Team = require('../models/team.model')
const User = require('../models/user.model')

const jwt = require('jsonwebtoken')

const { getTokenFrom } = require('./reqHelper')

teamRouter.get('/', async (req, res) => {
    const teams = await Team
        .find({})
        .populate('admin')
        .populate('members')

    res.json(teams.map(t => t.toJSON()))
})

teamRouter.post('/', async (req, res) => {
    const token = getTokenFrom(req)
    const decodedToken = jwt.verify(token, process.env.SECRET)

    if (!token || !decodedToken) {
        return res.status(401).json({ error: 'token missing or invalid' })
    }

    const newTeam = new Team({
        name: req.body.name,
        admin: mongoose.Types.ObjectId(decodedToken.id),
        members: [],
    })

    const savedTeam = await newTeam.save()

    let admin = savedTeam.admin
    let updatedUser = await User.findById(admin)
    
    updatedUser.teams.push(savedTeam._id)
    await updatedUser.save()

    res.json(savedTeam)
})

module.exports = teamRouter