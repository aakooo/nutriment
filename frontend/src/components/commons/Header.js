import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'
import { themeGreen } from '../styled'
import { Dropdown } from 'react-bootstrap'
import logo from '../../img/oversee-logo.png'
import plus from '../../img/plus_icon.png'

const Div = styled.div`
    background: linear-gradient(116.01deg, #AAF3E9 -24.66%, rgba(255, 255, 255, 0) 81.63%), #7ECEC3;
    filter: drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.25));
    width: 100%;
    padding: 1vw;
    margin: 0;
    display: flex;
    justify-content: space-between;
    z-index: 2;`

const dropDownButtonStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.32)',
    margin: '0.2em 0.1em',
    padding: '0.5em 1.5em',
    fontSize: '1.2em',
    textAlign: 'center',
}

const Header = () => {

    return (
        <Div>
            <Link to="/dashboard">
                <img 
                    src={logo}
                    alt=""
                    style={{
                        width: '15%',
                        minWidth: '150px',
                    }} />
            </Link>

            <Dropdown>
                <Dropdown.Toggle
                    style={{
                        background: 'none',
                        border: 'none',
                        width: '50%',
                        padding: 0,
                        margin: 0,
                    }}>
                    <img
                        src={plus}
                        alt=""
                        style={{
                            width: '90%',
                            minWidth: '7px',
                        }} />
                </Dropdown.Toggle>

                <Dropdown.Menu
                    style={{
                        backgroundColor: themeGreen,
                        padding: '0.2em',
                    }}>
                    <Dropdown.Item style={dropDownButtonStyle}>Create a Team</Dropdown.Item>
                    <Dropdown.Item style={dropDownButtonStyle} href="/join">Join a team</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Div>
    )
}

export default Header