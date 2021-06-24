import axios from 'axios'
const baseUrl = 'http://localhost:5000/api'

const saveMessage = async (message, token) => {
    const response = await axios
        .post(`${baseUrl}/teams/messages`, message, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    
    return response.data
}

const getAllMessages = async () => {
    const response = await axios
        .get(`${baseUrl}/teams/messages`)
    
    return response.data
}

const getMessages = async (teamId) => {
    const response = await axios
        .get(`${baseUrl}/teams/${teamId}/messages`)
    
    return response.data
}

const chatService = {
    saveMessage,
    getAllMessages,
    getMessages
}

export default chatService