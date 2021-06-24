import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import io from 'socket.io-client'
import chatService from '../../services/chatService'

let socket = null

const ChatForm = ({ value, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={value} onChange={onChange} />
      <button type="submit">send</button>
    </form>
  )
}
  
const ChatMessages = ({ username, content }) => {
  return (
    <div id={username === content.username ? "you" : "other"}>
      <p>{content.username} {username === content.username ? " - you" : ""}  : {content.message}</p>
    </div>
  )
}

const Chat = () => {
  const params = useParams()
  const [teamId] = useState(params.id)
  const token = useSelector(state => state.token)
  const [username, setUsername] = useState('')
  const [messages, setMessages] = useState([])
  const [msgTxt, setMsgTxt] = useState('')


  const onChangeMessageInput = (e) => {
    setMsgTxt(e.target.value)
  }

  const onSubmitMessageForm = async (e) => {
    e.preventDefault()

    let messageContent = {
      room: teamId,
      content: {
        username: username,
        message: msgTxt
      }
    }

    await socket.emit('send_message', messageContent)
    setMessages([...messages, messageContent.content])
    setMsgTxt('')

    //Saving the message to database
    const dbMessage = {
      content: messageContent.content.message,
      teamId: teamId,
      username: username
    }

    chatService
      .saveMessage(dbMessage, token.token)
      .then(response => {
        // console.log(response)
      })
      .catch(error => {
        let revMessages = messages
        revMessages.pop()
        setMessages([ ...revMessages ])
        return console.log(error.response.data)
      })
  }

  useEffect(() => {
    socket = io(process.env.SOCKET_URL || 'http://localhost:5000', {transports: ['websocket', 'polling', 'flashsocket']})
    socket.emit('join_room', teamId)

    chatService
      .getMessages(teamId)
      .then(response => {
        let receivedMessages = response.map(message => ({
            username: message.username,
            message: message.content
        }))

        // console.log(receivedMessages)
        setMessages([...receivedMessages])
      })
      .catch(error => console.log(error.response.data))
  }, [teamId])
  

  useEffect(() => {
    if (token) {
      setUsername(token.username)
    }
  }, [token])


  useEffect(() => {
    socket.on('receive_message', (data) => {
      // console.log(data)
      setMessages([...messages, data])
    })
  }, [messages])


  return (
    <div>
        Chat
        <h1>Messages</h1>
        <div>
          {messages.map((message, index) => <ChatMessages username={username} content={message} key={index} />)}
        </div>
        <ChatForm value={msgTxt} onChange={onChangeMessageInput} onSubmit={onSubmitMessageForm} />
    </div>
  )
}

export default Chat