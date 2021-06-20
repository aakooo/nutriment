const userReducer = (state=null, action) => {
    switch (action.type) {
        case 'INIT':
            return action.data

        case 'REMOVE':
            return null

        default:
            return state
    }
}

export const initializeUser = () => {
    
}

export default userReducer