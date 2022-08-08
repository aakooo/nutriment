import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import authService from '../../services/authService'

import { Form, Col } from 'react-bootstrap'
import styled from 'styled-components'
import { bgGradient, mediaQuery, ButtonHolder, Button } from '../styled'

const Div = styled.div`
    background: ${bgGradient};
    height: 100%;
    padding: 1vw;
    padding-bottom: 0;`

const H2 = styled.h2`
    font-family: 'Rubik', sans-serif;
    font-size: 2.5vw;
    margin: 5%;
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

const SignupForm = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    // const [formErrors, setFormErrors] = useState(null);

    const onSubmit = async event => {
        event.preventDefault()

        const userData = {
            firstName, lastName, email, phone, password
        }

        authService.createUser(userData)
            .then(data => {
                if (data) {
                    console.log(data)
                    navigate('/')
                }

                console.log(data)
            })
            .catch (error => {
                console.log(error)
            })
        
        // if (!formErrors) {
        //     await authService.createUser(userData)
        // }
    }

    // const renderError = (text, setStateVariable) => {

    //     return (
    //         <Form.Control.Feedback type="invalid">
    //             {text}
    //         </Form.Control.Feedback>
    //     )
    // }

    // if (notification && notification.variant === 'success') {
    //     return <Redirect to="/" />
    // }

    return (
        <Div>
            <H2>Signup</H2>

            <Form
                style={{
                    width: '80%',
                    margin: 'auto',
                }}
                onSubmit={onSubmit}>
                    <Form.Group>
                        <Form.Label style={labelStyle}>First Name</Form.Label>

                        <Form.Control
                            size="sm"
                            type="text"
                            name="firstName"
                            required
                            onChange={({target}) => setFirstName(target.value)} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label style={labelStyle}>Last Name</Form.Label>

                        <Form.Control
                            size="sm"
                            type="text"
                            name="lastName"
                            required
                            onChange={({ target }) => setLastName(target.value)} />

                    </Form.Group>

                    <Form.Group>
                        <Form.Label style={labelStyle}>Email</Form.Label>

                        <Form.Control
                            size="sm"
                            type="text"
                            name="email"
                            required
                            onChange={({ target }) => setEmail(target.value)} />

                    </Form.Group>

                    <Form.Group>
                        <Form.Label style={labelStyle}>Phone</Form.Label>

                        <Form.Control
                            size="sm"
                            type="text"
                            name="phone"
                            required
                            onChange={({ target }) => setPhone(target.value)} />

                    </Form.Group>

                    <Form.Group>
                        <Form.Label style={labelStyle}>Password</Form.Label>

                        <Form.Control
                            size="sm"
                            type="password"
                            name="password"
                            required
                            onChange={({ target }) => setPassword(target.value)} />
                    </Form.Group>
                
                <ButtonHolder>
                    <Button type="submit">Signup</Button>
                </ButtonHolder>
            </Form>

            <P>Already have an account? <Link to="/"
                style={{
                    color: 'white',
                }}>Login</Link>
            </P>
        </Div>
    )
}

export default SignupForm