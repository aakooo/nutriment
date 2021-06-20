const teamRouter = require('express').Router()

const mongoose = require('mongoose')
const Team = require('../models/team.model')
const User = require('../models/user.model')
const Milestone = require('../models/milestone.model')
const Task = require('../models/task.model')
const Message = require('../models/message.model')

const jwt = require('jsonwebtoken')

const { getTokenFrom } = require('./reqHelper')

teamRouter.get('/', async (req, res) => {
    const teams = await Team
        .find({})
        .populate('admin')
        .populate('members')

    res.json(teams)
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


// Milestone
teamRouter.post('/milestone', async (req, res) => {
    const token = getTokenFrom(req)
    const decodedToken = jwt.verify(token, process.env.SECRET)
    const team = await Team
            .findById(req.body.team)
            .populate('admin')

    if (!token || !decodedToken || decodedToken.id != team.admin._id) {
        return res.status(401).json({ error: 'token missing or invalid' })
    }

    const newMilestone = new Milestone({
        name: req.body.name,
        deadline: req.body.deadline,
        status: req.body.status,
        team: mongoose.Types.ObjectId(req.body.team)
    })
    const savedMilestone = await newMilestone.save()

    res.json(savedMilestone)
})

teamRouter.get('/milestone', async (req, res) => {
    const milestones = await Milestone
        .find({})
        .populate('team')
    
    res.json(milestones)
})

teamRouter.get('/:teamId/milestone', async (req, res) => {
    const milestones = await Milestone
        .find({ team: mongoose.Types.ObjectId(req.params.teamId) })
        .populate('team')
    
    res.json(milestones)
})

teamRouter.get('/milestone/:id', async (req, res) => {
    const milestone = await Milestone
        .findById(req.params.id)
        .populate('team')
    
    res.json(milestone)
})


teamRouter.delete('/milestone/:id', async (req, res) => {
    const token = getTokenFrom(req)
    const decodedToken = jwt.verify(token, process.env.SECRET)
    const milestone = await Milestone
            .findById(req.params.id)
            .populate({
                path: 'team',
                model: 'Team',
                populate: {
                    path: 'admin',
                    model: 'User'
                }
            })

    if (!token || !decodedToken || decodedToken.id != milestone.team.admin._id) {
        return res.status(401).json({ error: 'token missing or invalid' })
    }
    const deletedMilestone = await Milestone
        .findByIdAndDelete(req.params.id)
    res.json(deletedMilestone)
})


// Task route
teamRouter.post('/milestone/:mid/task', async (req, res) => {
    const token = getTokenFrom(req)
    const decodedToken = jwt.verify(token, process.env.SECRET)
    const milestone = await Milestone
            .findById(req.params.mid)
            .populate({
                path: 'team',
                model: 'Team',
                populate: {
                    path: 'admin',
                    model: 'User'
                }
            })

    if (!token || !decodedToken || decodedToken.id != milestone.team.admin._id) {
        return res.status(401).json({ error: 'token missing or invalid' })
    }

    const newTask = new Task({
        name: req.body.name,
        deadline: req.body.deadline,
        status: req.body.status,
        milestone: mongoose.Types.ObjectId(req.params.mid),
        assignedTo: mongoose.Types.ObjectId(req.body.assignedTo)
    })
    const savedTask = await newTask.save()

    res.json(savedTask)
})

teamRouter.get('/milestone/:mid/task', async (req, res) => {
    const tasks = await Task
        .find({ milestone: mongoose.Types.ObjectId(req.params.mid) })
        .populate('milestone')
        .populate('assignedTo')

    res.json(tasks)
})

teamRouter.get('/milestone/:mid/task/:taskId', async (req, res) => {
    const task = await Task
        .findById(req.params.taskId)
        .populate('milestone')
        .populate('assignedTo')
    
    res.json(task)
})

teamRouter.get('/milestone/task/:taskId', async (req, res) => {
    const task = await Task
        .findById(req.params.taskId)
        .populate('milestone')
        .populate('assignedTo')
    
    res.json(task)
})

teamRouter.delete('/milestone/:mid/task/:taskId', async (req, res) => {
    const token = getTokenFrom(req)
    const decodedToken = jwt.verify(token, process.env.SECRET)
    const milestone = await Milestone
            .findById(req.params.mid)
            .populate({
                path: 'team',
                model: 'Team',
                populate: {
                    path: 'admin',
                    model: 'User'
                }
            })

    if (!token || !decodedToken || decodedToken.id != milestone.team.admin._id) {
        return res.status(401).json({ error: 'token missing or invalid' })
    }

    const deletedTask = await Task
        .findByIdAndDelete(req.params.taskId)
    res.json(deletedTask)
})

teamRouter.delete('/milestone/task/:taskId', async (req, res) => {
    const token = getTokenFrom(req)
    const decodedToken = jwt.verify(token, process.env.SECRET)
    const task = await Task
            .findById(req.params.taskId)
            .populate({
                path: 'milestone',
                model: 'Milestone',
                populate: {
                    path: 'team',
                    model: 'Team',
                    populate: {
                        path: 'admin',
                        model: 'User'
                    }
                }
            })

    if (!token || !decodedToken || decodedToken.id != task.milestone.team.admin._id) {
        return res.status(401).json({ error: 'token missing or invalid' })
    }

    const deletedTask = await Task
        .findByIdAndDelete(req.params.taskId)
    res.json(deletedTask)
})


// Messages route
teamRouter.post('/messages', async (req, res) => {
    const token = getTokenFrom(req)
    const decodedToken = jwt.verify(token, process.env.SECRET)

    if (!token || !decodedToken) {
        return res.status(401).json({ error: 'token missing or invalid' })
    }

    const newMessage = new Message({
        content: req.body.content,
        teamId: mongoose.Types.ObjectId(req.body.teamId),
        username: req.body.username
    })

    const savedMessage = await newMessage.save()
    res.json(savedMessage)
})

teamRouter.get('/messages', async (req, res) => {
    const messages = await Message
        .find({})
    
    res.json(messages)
})

teamRouter.get('/:teamId/messages', async (req, res) => {
    const messages = await Message
        .find({ teamId: mongoose.Types.ObjectId(req.params.teamId) })
    
    res.json(messages)
})

module.exports = teamRouter