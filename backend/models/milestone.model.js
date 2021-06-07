const mongoose = require('mongoose')

const milestoneSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: 4,
        maxLength: 20,
        required: true,
    },
    deadline: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    team: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team',
        required: true
    }
}, {
    timestamps: true
})

milestoneSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Milestone', milestoneSchema)