import authService from "../services/authService"

const tokenReducer = (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
            return action.data

        case 'LOGOUT':
            return {}

        default:
            return state
    }
}

export const userLogin = creds => {
    return async dispatch => {
        const token = await authService.login(creds)

        dispatch({
            type: 'LOGIN',
            data: token,
        })
    }
}

export const userLogout = () => {

}

export default tokenReducer