const mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
    username: {
        type: String,
        minLength: 4,
        maxLength: 20,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    phone: {
        type: Number,
        unique: true
    }
}, {
    timestamps: true
})

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
        delete returnedObject.password
    }
})

module.exports = mongoose.model('User', userSchema)