import React from 'react'
import { Link } from 'react-router-dom'

import { Nav } from 'react-bootstrap'
import styled from 'styled-components'
import { themeBlue } from '../styled'
import homeIcon from '../../img/home_icon.png'
import calendarIcon from '../../img/calendar_icon.png'
import profileIcon from '../../img/profile_icon.png'

const P = styled.p`
    font-size: 1em;
    width: fit-content;
    margin: auto;
    color: ${themeBlue}`

const imgStyle = {
    width: '60%',
}

const navItemStyle = {
    padding: '15% 10%',
    textAlign: 'center',
}

const Navbar = () => {

    return (
        <>
            <Nav.Item>
                <Link to="/dashboard" style={navItemStyle}>
                    <img
                        src={homeIcon}
                        alt=""
                        style={imgStyle} />
                    <P>Home</P>
                </Link>
            </Nav.Item>

            <Nav.Item>
                <Link to="/calendar" style={navItemStyle}>
                    <img
                        src={calendarIcon}
                        alt=""
                        style={imgStyle} />
                    <P>Calendar</P>
                </Link>
            </Nav.Item>

            <Nav.Item> 
                <Link to="/profile" style={navItemStyle}>
                    <img
                        src={profileIcon}
                        alt=""
                        style={imgStyle} />
                    <P>Profile</P>
                </Link>
            </Nav.Item>
        </>
    )
}

export default Navbar