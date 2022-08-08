import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import authService from '../../services/authService'

import { Alert, Form } from 'react-bootstrap'
import { Button, bgGradient, mediaQuery, ButtonHolder } from '../styled'
import styled from 'styled-components'

const Div = styled.div`
    background: ${bgGradient};
    height: 100%;
    padding: 1vw`

const H2 = styled.h2`
    font-family: 'Rubik', sans-serif;
    font-size: 2.5vw;
    margin: 10%;
    text-align: center;
    
    ${mediaQuery} {
        font-size: 7vw;
    }`

const P = styled.p`
    margin-top: 7%;
    font-size: 1.2em;
    text-align: center;`

const labelStyle = {
    textAlign: 'left',
    fontSize: '1em',
}

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const onSubmit = event => {
        event.preventDefault()

        authService.userLogin({email, password})
            .then(data => {
                if (data.login) {
                    console.log(data)
                    navigate('/dashboard')
                }

                console.log(data)
            })
            .catch (error => {
                console.log(error)
            })
        // dispatch(userLogin({ username, password }))
        // console.log(token)
    }

    return (
        <Div>
            <H2>Login</H2>

            {/* {notification
                ? <Alert variant={notification.variant}>{notification.message}</Alert>
                : null } */}

            <Form style={{
                width: '70%',
                margin: 'auto',
            }}
                onSubmit={onSubmit} >
                <Form.Group>
                    <Form.Label style={labelStyle}>Phone/Email</Form.Label>

                    <Form.Control
                        type="text"
                        name="Email"
                        onChange={({ target }) => setEmail(target.value)} />
                </Form.Group>

                <Form.Group>
                    <Form.Label style={labelStyle}>Password</Form.Label>

                    <Form.Control
                        type="password"
                        name="password"
                        onChange={({ target }) => setPassword(target.value)} />
                </Form.Group>

                <ButtonHolder style={{
                    marginTop: '10%',
                }}>
                    <Button type="submit">
                        Login
                    </Button>
                </ButtonHolder>
            </Form>

            <P>New here? <Link 
                to="/signup"
                style={{
                    color: 'white',
                }}>Signup</Link>
            </P>
        </Div>
    )
}

export default LoginForm