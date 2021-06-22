import React from 'react'
import { Link } from 'react-router-dom'

import { themeBlue } from '../styled'
import styled from 'styled-components'

const Ul = styled.ul`
    display: flex;
    padding: 0;
    margin-bottom: 0;
    margin-top: 0.5em;`

const Li = styled.li`
    display: flex;
    margin-right: 1em;`

const Span = styled.span`
    font-weight: bold;
    margin-right: 0.5em;`

const TeamCard = (props) => {
    const team = props.team

    return (
        <div style={{
            backgroundColor: '#ffffff',
            padding: '1em',
        }}>
            <Link 
                to={`/${team.id}`}
                style={{ color: themeBlue }}>

                <p style = {{ fontSize: '1.8em', margin: 0, }}>{team.name}</p>
                <Ul >
                    <Li><Span>Admin: </Span>{team.admin}</Li>
                    <Li><Span>No. of members: </Span>{team.members}</Li>
                    <Li><Span>Date created: </Span>{team.createdAt.substring(0, 10)}</Li>
                </Ul>
            </Link>
        </div>
    )
}

const TeamList = ({ user }) => {
    

    // useEffect(() => {

    // }, [currentUser])

    if (!user) {
        return (
            <div>
                Loading ...
            </div>
        )
    }

    return (
        <div>
            <ul style={{
                display: 'block',
                paddingLeft: 0,
            }}>
                {user.teams.map(team => {
                    return <TeamCard team={team} key={team.id}/>
                })}
            </ul>
        </div>
    )
}

export default TeamList