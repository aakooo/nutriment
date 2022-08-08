const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('express-async-errors')

const config = require('./utils/config')
const middleware = require('./utils/middleware')
const logger = require('./utils/logger')

const userRouter = require('./routes/user.route')
const loginRouter = require('./routes/login.route')
const preferenceRouter = require('./routes/preference.route')

const app = express()

//Connecting to mongoDB
logger.info('Connecting to', config.MONGODB_URI)
mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    .then(() => {
        logger.info('Connected to MongoDB')
    })
    .catch((error) => {
        logger.error('Error connecting to MongoDB:', error.message)
    })

//Middlewares
app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.use(middleware.requestLogger)

app.get('/', (request, response) => {
    response.send('<p>Nutriment backend api</p>')
})

app.use('/api/users', userRouter)
app.use('/api/login', loginRouter)
app.use('/api/preferences', preferenceRouter)

app.use(middleware.unknownEndPoint)
app.use(middleware.errorHandler)

module.exports = app