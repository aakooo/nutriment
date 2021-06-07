const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },

    teamId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team',
        required: true
    },

    username: {
        type: String,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
})

messageSchema.set('toJSON', (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
})

module.exports = mongoose.model('Message', messageSchema)