import React from 'react'
import { useDispatch } from 'react-redux'
import { Redirect } from 'react-router'

import { userLogout } from '../reducers/tokenReducer'

const Dashboard = () => {
    const dispatch = useDispatch()

    const logout = event => {
        dispatch(userLogout())
        
        return <Redirect to="/" />
    }

    return (
        <div>
            <p>Dashboard</p>

            <button
                onClick={logout}>Logout</button>
        </div>
    )
}

export default Dashboard