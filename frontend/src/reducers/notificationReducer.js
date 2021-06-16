const notificationReducer = (state = null, action) => {
    switch (action.type) {
        case 'ADD_ERROR':
            return action.data

        case 'REMOVE_ERROR':
            return null
        
        default:
            return state
    }
}

export const showNotification = (variant, message) => {
    return ({
        type: 'ADD_ERROR',
        data: {
            variant: variant,
            message: message,
        },
    })
}

export const removeNotification = () => {
    return ({
        type: 'REMOVE_ERROR',
        data: null,
    })
}

export default notificationReducer