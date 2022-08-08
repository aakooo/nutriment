import axios from 'axios'

const baseurl = 'http://localhost:5000/api'

const userLogin = async userDetails => {
    if (userDetails.email === '' || userDetails.password === '') {
        return { login: false }
    }
    const res = await axios.post(`${baseurl}/login`, userDetails)

    return res.data
}

const createUser = async userDetails => {
    const res = await axios.post(`${baseurl}/users`, userDetails)

    return res.data
}

const authService = {
    userLogin,
    createUser,
}

export default authService