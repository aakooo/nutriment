const preferenceRouter = require('express').Router()
const mongoose = require('mongoose')

const Preference = require('../models/preference.model')

preferenceRouter.post('/', async (req, res) => {
    const body = req.body

    const newPreference = new Preference({
        user: mongoose.Types.ObjectId(body.user),
        breakfast: body.breakfast,
        lunch: body.lunch,
    })

    const savedPreference = await newPreference.save()
    res.json(savedPreference)
})

preferenceRouter.get('/', async (req, res) => {
    const preferences = await Preference
        .find({})

    res.json(preferences.map(u => u.toJSON()))
})

preferenceRouter.put('/:userid', async (req, res) => {
    const body = req.body

    const toUpdate = {
        breakfast: body.breakfast,
        lunch: body.lunch
    }

    const updatedPreference = await Preference.findOneAndUpdate({
        user: req.params.userid
    }, toUpdate)

    if (!updatedPreference) {
        res.status(401).json({error: 'Unable to find user'})
    }

    res.json(updatedPreference.toJSON())
})

module.exports = preferenceRouter