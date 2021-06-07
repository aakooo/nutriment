const teamRouter = require('express').Router()

const mongoose = require('mongoose')
const Team = require('../models/team.model')

teamRouter.get('/', async (req, res) => {
    const teams = await Team
        .find({})
        .populate('admin')
        .populate('members')

    res.json(teams.map(t => t.toJSON()))
})

teamRouter.post('/', async (req, res) => {
    const newTeam = new Team({
        name: req.body.name,
        admin: mongoose.Types.ObjectId(req.body.admin),
        members: [],
    })

    const savedTeam = await newTeam.save()
    res.json(savedTeam)
})

module.exports = teamRouter