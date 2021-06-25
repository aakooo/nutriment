import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initializeUser } from '../reducers/userReducer'
import { initializeToken } from '../reducers/tokenReducer'

import HeaderNavLayout from './commons/HeaderNavLayout'
import TeamList from './commons/TeamList'

const headingStyle = {
    fontSize: '3em',
    margin: '0.5em 0',
}

const ProfileItem = ({ field, value }) => {

    return (
        <p>
            <span style={{
                fontWeight: 'bold',
                marginRight: '1em',
            }}>{field}: </span> {value}
        </p>
    )
}

const Profile = () => {
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.currentUser)
    const token = useSelector(state => state.token)

    useEffect(() => {
        if (!token) {
            dispatch(initializeToken())
        }

        if (!currentUser && token) {
            dispatch(initializeUser(token.username, token.token))
        }
    }, [token, currentUser, dispatch])

    if (!currentUser) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    return (
        <HeaderNavLayout>
            <h2 style={headingStyle}>Profile</h2>

            <div style={{
                width: 'fit-content',
                margin: 'auto',
                marginBottom: '4em',
                fontSize: '1.2em',
            }}>
                <ProfileItem field="Username" value={currentUser.username} />
                <ProfileItem field="Name" value={currentUser.firstName + ' ' + currentUser.lastName} />
                <ProfileItem field="Email" value={currentUser.email}/>
                <ProfileItem field="Phone" value={currentUser.phone} />
            </div>
            
            <h3 style={{
                ...headingStyle,
                fontSize: '2.5em',
            }}>Your Teams</h3>
            <TeamList user={currentUser} />

        </HeaderNavLayout>
    )
}

export default Profile