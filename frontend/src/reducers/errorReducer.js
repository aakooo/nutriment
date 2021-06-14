const errorReducer = (state = null, action) => {
    switch (action.type) {
        case 'ADD_ERROR':
            return action.data

        case 'REMOVE_ERROR':
            return null
        
        default:
            return state
    }
}

export const showError = message => {
    return ({
        type: 'ADD_ERROR',
        data: message,
    })
}

export const removeError = () => {
    return ({
        type: 'REMOVE_ERROR',
        data: null,
    })
}

export default errorReducer