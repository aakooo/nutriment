import axios from 'axios'
const baseUrl = 'http://localhost:5000/api'

const createUser = async userData => {
    const response = await axios
        .post(`${baseUrl}/users`, userData)

    return response.data
}

const login = async creds => {
    if (!creds.username || !creds.password) {
        return
    }

    const response = await axios
        .post(`${baseUrl}/login`, creds)

    return response.data
}

const authService = { createUser, login }
export default authService