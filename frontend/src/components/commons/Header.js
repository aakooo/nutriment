import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

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

            <button
                style={{
                    background: 'none',
                    border: 'none',
                }}>
                <img
                    src={plus}
                    alt=""
                    style={{
                        width: '50%',
                        minWidth: '7px',
                    }} />
            </button>
        </Div>
    )
}

export default Header