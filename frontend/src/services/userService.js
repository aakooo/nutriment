import axios from 'axios'
const baseUrl = 'http://localhost:5000/api'

const getUserObject = async (username, token) => {
    const response = await axios
        .get(`${baseUrl}/users/${username}`, {
            headers: { Authorization: `Bearer ${token}` }
        })

    return response.data
}

const userService = {
    getUserObject,
}

export default userService