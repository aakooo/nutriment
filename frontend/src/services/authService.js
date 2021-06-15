import axios from 'axios'
const baseUrl = 'http://localhost:5000/api'

const validateSignUpForm = (userData) => {
    let errors = {}
    const letters = /[a-zA-Z]/
    const onlyNumbers = /^\d+$/

    //First Name
    if (!letters.test(userData.firstName)) {
        errors.firstname = 'Please enter letters'
    } else if (userData.firstName.length < 2) {
        errors.firstName = 'Please enter atleast two letters'
    } else {
        delete errors.firstName
    }

    //Last Name
    if (!letters.test(userData.lastName)) {
        errors.lastName = 'Please enter letters'
    } else if (userData.lastName.length < 2) {
        errors.lastName = 'Please enter atleast two letters'
    } else {
        delete errors.lastName
    }

    //Username
    if (userData.username.length < 4 || userData.username.length > 20) {
        errors.username = 'Please enter a username between 4-20 characters'
    } else if (!letters.test(userData.username)) {
        errors.username = 'Enter atleast one alphabet'
    } else {
        delete errors.username
    }

    //Email
    if (userData.email.length < 5 || !userData.email.includes('@')) {
        errors.email = 'Please enter a valid email address'
    } else {
        delete errors.email
    }

    //Phone
    if (!onlyNumbers.test(userData.phone) || userData.phone.length < 5) {
        errors.phone = 'Please enter a valid phone number'
    } else {
        delete errors.phone
    }

    //Password
    if (userData.password.length < 3) {
        errors.password = 'Please enter atleast 3 characters'
    } else {
        delete errors.password
    }

    if (Object.keys(errors).length === 0) {
        return null
    }
    
    return errors
}

const createUser = async userData => {
    try{
        const response = await axios
            .post(`${baseUrl}/users`, userData)

        return response.data
    } catch (error) {
        console.log(error)
    }
}

const login = async creds => {
    if (!creds.username || !creds.password) {
        return
    }

    const response = await axios
        .post(`${baseUrl}/login`, creds)

    return response.data
}

const authService = {
    validateSignUpForm,
    createUser,
    login
}
export default authService