import React from 'react'
import { Link } from 'react-router-dom'

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

    return (
        <Div>
            <H2>Signup</H2>

            <Form
                style={{
                    width: '80%',
                    margin: 'auto',
                }}>
                <Form.Row>
                    <Form.Group 
                        as={Col}
                        lg="6"md="6" sm="12">
                        <Form.Label style={labelStyle}>First Name</Form.Label>

                        <Form.Control
                            size="sm"
                            type="text"
                            name="username" />
                    </Form.Group>

                    <Form.Group as={Col} lg="6" md="6" sm="12">
                        <Form.Label style={labelStyle}>Last Name</Form.Label>

                        <Form.Control
                            size="sm"
                            type="text"
                            name="username" />
                    </Form.Group>
                </Form.Row>

                <Form.Group>
                    <Form.Label style={labelStyle}>Username</Form.Label>

                    <Form.Control
                        size="sm"
                        type="text"
                        name="username" />
                </Form.Group>

                <Form.Group>
                    <Form.Label style={labelStyle}>Email</Form.Label>

                    <Form.Control
                        size="sm"
                        type="text"
                        name="username" />
                </Form.Group>

                <Form.Group>
                    <Form.Label style={labelStyle}>Phone</Form.Label>

                    <Form.Control
                        size="sm"
                        type="text"
                        name="username" />
                </Form.Group>

                <Form.Group>
                    <Form.Label style={labelStyle}>Password</Form.Label>

                    <Form.Control
                        size="sm"
                        type="text"
                        name="username" />
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