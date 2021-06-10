const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const User = require('../models/user.model')
const initialValues = require('./initialValues')

const initUsers = async () => {
    await User.deleteMany({})

    let dataToSave = initialValues.userData.map((user) => ({
            ...user,
            password: bcrypt.hash(user.password, 10)
        }))

    hashedData = await Promise.all(dataToSave)
    
    const userObjects = hashedData.map(user => new User(user))
    const savedDataPromises = userObjects.map(user => user.save())

    await Promise.all(savedDataPromises)
}

const creds = {
    username: 'batman',
    password: 'batgirl',
}

const closeConnection = () => {
    mongoose.connection.close()
}

module.exports = {
    initUsers,
    creds,
    closeConnection,
}