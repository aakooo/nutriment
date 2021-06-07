const mongoose = require('mongoose')

const teamSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: 4,
        required: true
    },
    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
})

teamSchema.set('toJSON', (request, returnedObject) => {
    returnedObject.id = returnedOBject._id
    delete returnedObject._id
    delete returnedObject.__v
})

module.exports = mongoose.model('Team', teamSchema)