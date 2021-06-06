const { response } = require('express')
const express = require('express')
const { request } = require('../../oversee-old-version/oversee-backend/app')
const app = express()

app.get('/', (request, response) => {
    response.send('<p>Oversee backend api</p>')
})

const PORT = 5000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})