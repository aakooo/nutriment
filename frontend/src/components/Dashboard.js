import React from 'react'
import { useDispatch } from 'react-redux'
import { Redirect } from 'react-router'

import { userLogout } from '../reducers/tokenReducer'
import HeaderNavLayout from './commons/HeaderNavLayout'

const Dashboard = () => {
    const dispatch = useDispatch()

    const logout = event => {
        dispatch(userLogout())
        
        return <Redirect to="/" />
    }

    return (
        <HeaderNavLayout>
            <button
                onClick={logout} >
                Logout
            </button>
        </HeaderNavLayout>
    )
}

export default Dashboard