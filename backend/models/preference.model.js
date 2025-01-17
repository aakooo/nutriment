const mongoose = require('mongoose')

var preferenceSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    breakfast: {
        type: Boolean
    },
    lunch: {
        type: Boolean
    }
}, {
    timestamps: true
})

preferenceSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Preference', preferenceSchema)