import React from 'react'
import { Form } from 'react-bootstrap'
import { Button, bgGradient, mediaQuery, ButtonHolder } from '../styled'
import styled from 'styled-components'

const H2 = styled.h2`
    font-family: 'Rubik', sans-serif;
    font-size: 2.5vw;
    margin: 10%;
    text-align: center;
    
    ${mediaQuery} {
        font-size: 7vw;
    }`

const Div = styled.div`
    background: ${bgGradient};
    height: 100%;
    padding: 1vw`

const labelStyle = {
    textAlign: 'left',
    fontSize: '1em',
}

const LoginForm = () => {

    return (
        <Div>
            <H2>Login</H2>

            <Form style={{
                width: '70%',
                margin: 'auto',
            }}>
                <Form.Group>
                    <Form.Label style={labelStyle}>Username/Email</Form.Label>

                    <Form.Control
                        type="text"
                        name="username" />
                </Form.Group>

                <Form.Group>
                    <Form.Label style={labelStyle}>Password</Form.Label>

                    <Form.Control
                        type="password"
                        name="username" />
                </Form.Group>

                <ButtonHolder style={{
                    marginTop: '10%',
                }}>
                    <Button type="submit">
                        Login
                    </Button>
                </ButtonHolder>
            </Form>
        </Div>
    )
}

export default LoginForm