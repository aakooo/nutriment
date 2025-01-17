const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const loginRouter = require('express').Router()

const User = require('../models/user.model')

loginRouter.post('/', async (req, res) => {
    const body = req.body

    const user = await User.findOne({
        $or: [{ phone: body.email }, { email: body.email }]
    })

    const passwordCorrect = user === null
        ? false
        : await bcrypt.compare(body.password, user.password)

    if (!(user && passwordCorrect)) {
        return res.status(401).json({
            error: 'invalid username or password'
        })
    }
    
    res.status(200).send({
        login: true,
        user
    })
})

module.exports = loginRouter