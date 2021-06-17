import React from 'react'
import { useDispatch } from 'react-redux'
import { Redirect } from 'react-router'

import { userLogout } from '../reducers/tokenReducer'
import Header from './commons/Header'
import Navbar from './commons/Navbar'

const Dashboard = () => {
    const dispatch = useDispatch()

    const logout = event => {
        dispatch(userLogout())
        
        return <Redirect to="/" />
    }

    return (
        <div>
            <Header />
            <Navbar />

            <button
                onClick={logout}>Logout</button>
        </div>
    )
}

export default Dashboard