import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Div = styled.div`
    background-color: #A6E1D9;
    padding: 2em;
    display: flex;
    width: 100%;
`

const H1 = styled.h1`
    color: white;
    textAlign: center;
    margin: 0 auto;
    fontSize: 2.5em;
`

const Header = ({title}) => {

    return (
        <Div>
            <H1>{title}</H1>
        </Div>
    )
}

export default Header