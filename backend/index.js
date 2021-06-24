const http = require('http')

const app = require('./app')
const config = require('./utils/config')
const logger = require('./utils/logger')
const socket = require('socket.io')

const server = http.createServer(app)

server.listen(config.PORT, () => {
    logger.info(`Server running on port ${config.PORT}`)
})

io = socket(server)

io.on('connection', (socket) => {
  console.log("socket id: ", socket.id)

  socket.on('join_room', (data) => {
    socket.join(data)
    console.log(`User joined Room: ${data}`)
  })

  socket.on('send_message', (data) => {
    console.log(data)
    socket.to(data.room).emit('receive_message', data.content)
  })

  socket.on('disconnect', () => {
    console.log('User Disconnected')
  })
})
