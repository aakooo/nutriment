import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router'

import { userLogout } from '../reducers/tokenReducer'
import { initializeUser } from '../reducers/userReducer'
import HeaderNavLayout from './commons/HeaderNavLayout'
import TeamList from './commons/TeamList'

const Dashboard = () => {
    const dispatch = useDispatch()
    const token = useSelector(state => state.token)
    const currentUser = useSelector(state => state.currentUser)

    const logout = event => {
        dispatch(userLogout())
        
        return <Redirect to="/" />
    }

    useEffect(() => {
        dispatch(initializeUser(token.username, token.token))
    }, [token, dispatch])

    return (
        <HeaderNavLayout>
            <button
                onClick={logout} >
                Logout
            </button>
            <TeamList user={currentUser}/>
        </HeaderNavLayout>
    )
}

export default Dashboard