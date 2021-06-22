import React from 'react'
import HeaderNavLayout from './commons/HeaderNavLayout'
import TeamHeader from './teams/TeamHeader'
import Chat from './teams/Chat'

const TeamHome = () => {

    return (
        <HeaderNavLayout>
            <TeamHeader />
            <Chat />
        </HeaderNavLayout>
    )
}

export default TeamHome