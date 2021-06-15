import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { showNotification } from '../../reducers/notificationReducer'
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
    const dispatch = useDispatch()
    const notification = useSelector(state => state.notification)

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [formErrors, setFormErrors] = useState(null);

    const onSubmit = async event => {
        event.preventDefault()

        const userData = {
            firstName, lastName, username, email, phone, password
        }

        setFormErrors(authService.validateSignUpForm(userData))
        
        if (!formErrors) {
            await authService.createUser(userData)
            dispatch(showNotification('success', 'User Created'))
        }
    }

    const renderError = (text, setStateVariable) => {

        return (
            <Form.Control.Feedback type="invalid">
                {text}
            </Form.Control.Feedback>
        )
    }

    if (notification && notification.variant === 'success') {
        return <Redirect to="/" />
    }

    return (
        <Div>
            <H2>Signup</H2>

            <Form
                style={{
                    width: '80%',
                    margin: 'auto',
                }}
                onSubmit={onSubmit}>
                <Form.Row>
                    <Form.Group 
                        as={Col}
                        lg="6"md="6" sm="12">
                        <Form.Label style={labelStyle}>First Name</Form.Label>

                        <Form.Control
                            size="sm"
                            type="text"
                            name="firstName"
                            required
                            isInvalid={formErrors && formErrors.firstName}
                            onChange={({target}) => setFirstName(target.value)} />

                        {formErrors && formErrors.firstName
                            ? renderError(formErrors.firstName, setFirstName)
                            : null}
                    </Form.Group>

                    <Form.Group as={Col} lg="6" md="6" sm="12">
                        <Form.Label style={labelStyle}>Last Name</Form.Label>

                        <Form.Control
                            size="sm"
                            type="text"
                            name="lastName"
                            required
                            isInvalid={formErrors && formErrors.lastName}
                            onChange={({ target }) => setLastName(target.value)} />

                        {formErrors && formErrors.lastName
                            ? renderError(formErrors.lastName, setLastName)
                            : null}
                    </Form.Group>
                </Form.Row>

                <Form.Group>
                    <Form.Label style={labelStyle}>Username</Form.Label>

                    <Form.Control
                        size="sm"
                        type="text"
                        name="username"
                        required
                        isInvalid={formErrors && formErrors.username}
                        onChange={({ target }) => setUsername(target.value)} />

                    {formErrors && formErrors.username
                        ? renderError(formErrors.username, setUsername)
                        : null}
                </Form.Group>

                <Form.Group>
                    <Form.Label style={labelStyle}>Email</Form.Label>

                    <Form.Control
                        size="sm"
                        type="text"
                        name="email"
                        required
                        isInvalid={formErrors && formErrors.email}
                        onChange={({ target }) => setEmail(target.value)} />

                    {formErrors && formErrors.email
                        ? renderError(formErrors.email, setEmail)
                        : null}
                </Form.Group>

                <Form.Group>
                    <Form.Label style={labelStyle}>Phone</Form.Label>

                    <Form.Control
                        size="sm"
                        type="text"
                        name="phone"
                        required
                        isInvalid={formErrors && formErrors.phone}
                        onChange={({ target }) => setPhone(target.value)} />

                    {formErrors && formErrors.phone
                        ? renderError(formErrors.phone, setPhone)
                        : null}
                </Form.Group>

                <Form.Group>
                    <Form.Label style={labelStyle}>Password</Form.Label>

                    <Form.Control
                        size="sm"
                        type="password"
                        name="password"
                        required
                        isInvalid={formErrors && formErrors.password}
                        onChange={({ target }) => setPassword(target.value)} />

                    {formErrors && formErrors.password
                        ? renderError(formErrors.password, setPassword)
                        : null}
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