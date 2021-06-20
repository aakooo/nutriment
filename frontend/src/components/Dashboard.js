import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router'

import { userLogout } from '../reducers/tokenReducer'
import userService from '../services/userService'
import HeaderNavLayout from './commons/HeaderNavLayout'
import TeamList from './commons/TeamList'

const Dashboard = () => {
    const dispatch = useDispatch()
    const token = useSelector(state => state.token)

    const logout = event => {
        dispatch(userLogout())
        
        return <Redirect to="/" />
    }

    useEffect(() => {
        const fetchUser = async () => {
            const user = await userService.getUserObject(token.username, token.token)
            return user
        }

        fetchUser().then(user => {
            console.log('Dashboard', user)
        })
    }, [token])

    return (
        <HeaderNavLayout>
            <button
                onClick={logout} >
                Logout
            </button>
            <TeamList />
        </HeaderNavLayout>
    )
}

export default Dashboard