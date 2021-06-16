import authService from "../services/authService"
import { showNotification } from "./notificationReducer"

const tokenReducer = (state = null, action) => {
    switch (action.type) {
        case 'INIT':
            return action.data

        case 'LOGIN':
            return action.data

        case 'LOGOUT':
            return null

        default:
            return state
    }
}

export const initializeToken = () => {
    const jsonToken = localStorage.getItem('token')
    const token = jsonToken
        ? JSON.parse(jsonToken)
        : null

    return {
        type: 'INIT',
        data: token,
    }
}

export const userLogin = creds => {
    
    return async dispatch => {
        try {
            const token = await authService.login(creds)
            localStorage.setItem('token', JSON.stringify(token))

            dispatch({
                type: 'LOGIN',
                data: token,
            })
        } catch (error) {
            dispatch(showNotification('danger', 'Invalid Credentials'))
        }
    }
}

export const userLogout = () => {
    localStorage.removeItem('token')

    return {
        type: 'LOGOUT',
        data: null,
    }
}

export default tokenReducer