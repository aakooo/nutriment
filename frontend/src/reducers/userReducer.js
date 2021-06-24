import userService from "../services/userService"
import { showNotification } from "./notificationReducer"
import { userLogout } from "./tokenReducer"

const userReducer = (state=null, action) => {
    switch (action.type) {
        case 'INIT_USER':
            return action.data

        case 'REMOVE_USER':
            return null

        default:
            return state
    }
}

export const initializeUser = (username, token) => {
    
    return async dispatch => {
        try {
            const userObject = await userService.getUserObject(username, token)
            dispatch({
                type: 'INIT_USER',
                data: userObject,
            })
        } catch (error) {
            console.log('Error', error)
            showNotification('danger', 'Your session expired')
            dispatch(userLogout())
        }
    }
}

export default userReducer