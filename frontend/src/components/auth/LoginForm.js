import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userLogin } from '../../reducers/tokenReducer'

import { Form } from 'react-bootstrap'
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
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const token = useSelector(state => state)

    const onSubmit = event => {
        event.preventDefault()

        dispatch(userLogin({ username, password }))
    }

    return (
        <Div>
            <H2>Login</H2>

            <Form style={{
                width: '70%',
                margin: 'auto',
            }}
                onSubmit={onSubmit} >
                <Form.Group>
                    <Form.Label style={labelStyle}>Username/Email</Form.Label>

                    <Form.Control
                        type="text"
                        name="username"
                        onChange={({ target }) => setUsername(target.value)} />
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