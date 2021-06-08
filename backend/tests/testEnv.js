const mongoose = require('mongoose')

const User = require('../models/user.model')
const initialValues = require('./initialValues')

const initUsers = async () => {
    await User.deleteMany({})

    let noteObject = new User(initialValues.userData[0])
    await noteObject.save()
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