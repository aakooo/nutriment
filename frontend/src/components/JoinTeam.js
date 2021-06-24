import React from 'react'

import { themeBlue } from './styled'
import { Form } from 'react-bootstrap'
import styled from 'styled-components'
import HeaderNavLayout from './commons/HeaderNavLayout'
import searchIcon from '../img/search_icon.png'

const Button = styled.button`
    background-color: ${themeBlue};
    border: none;
    padding: 0.5em 0;
    width: fit-content;
    box-shadow: 0 3px 10px #00000057;`

const inputStyle = {
    width: '50%',
    marginRight: '1em',
    minWidth: '200px',
    fontSize: '1.5em',
}

const JoinTeam = () => {

    return (
        <HeaderNavLayout>
            <h2 style={{ textAlign: 'center', margin: '1em', }}>Join a Team</h2>

            <Form inline style={{ justifyContent: 'center', margin: '2em', }}>
                <Form.Control
                    type="text"
                    placeholder="Search by team name or id"
                    style={inputStyle} />

                <Button type="submit">
                    <img
                        src={searchIcon}
                        alt=""
                        style={{
                            width: '50%',
                            minWidth: '20px',
                        }} />
                </Button>
            </Form>
        </HeaderNavLayout>
    )
}

export default JoinTeam