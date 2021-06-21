import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const TeamCard = (props) => {

    return (
        <div>
            {props.name}
        </div>
    )
}

const TeamList = () => {
    const currentUser = useSelector(state => state.currentUser)

    // useEffect(() => {

    // }, [currentUser])

    return (
        <div>
            <ul>
                {currentUser.teams.map(team => {
                    return <TeamCard name={team.name} key={team.id}/>
                })}
            </ul>
        </div>
    )
}

export default TeamList