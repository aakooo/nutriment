import React from 'react'
// import logo from '../../img/oversee-logo.png'
import styled from 'styled-components'
import { mediaQuery } from '../styled'

const H3 = styled.h3`
    font-size: 4vw;
    width: 70%;
    margin-top: 5%;
    
    ${mediaQuery} {
        font-size: 8vw;
        margin: auto;
        margin-top: 20%;
        margin-bottom: 30%;
        width: 90%;
        text-align: center;
    }`

const Overview = () => {


    return (
        <div 
            style={{
                paddingTop: '1vw',
                paddingLeft: '2vw',
            }}>
            {/* <img 
                src={logo}
                alt=""
                style = {{
                    width: '30%',
                    minWidth: '150px',
                    marginBottom: '10%',
                }} /> */}

            <H3>The most efficient way to handle projects</H3>
        </div>
    )
}

export default Overview