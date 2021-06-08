const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const loginRouter = require('express').Router()

const User = require('../models/user.model')

loginRouter.post('/', async (req, res) => {
    const body = req.body

    const user = await User.findOne({
        $or: [{ username: body.username }, { email: body.username }]
    })

    const passwordCorrect = user === null
        ? false
        : await bcrypt.compare(body.password, user.password)

    if (!(user && passwordCorrect)) {
        return res.status(401).json({
            error: 'invalid username or password'
        })
    }

    const userForToken = {
        username: user.username,
        id: user._id,
    }

    const token = jwt.sign(
        userForToken,
        process.env.SECRET,
        { expiresIn: 60*60*24 },    
    )
    
    res.status(200).send({
        token,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName
    })
})

module.exports = loginRouter