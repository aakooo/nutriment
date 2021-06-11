import React from 'react'
import { Form } from 'react-bootstrap'
import { Button, bgGradient } from '../styled'

const LoginForm = () => {

    return (
        <div style={{ background: bgGradient, textAlign: 'center', height: '100%' }}>
            <h2>Login</h2>

            <Form>
                <Form.Group>
                    <Form.Label>Username/Email</Form.Label>

                    <Form.Control
                        type="text"
                        name="username" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password</Form.Label>

                    <Form.Control
                        type="password"
                        name="username" />
                </Form.Group>

                <Button type="submit">
                    Login
                </Button>
            </Form>
        </div>
    )
}

export default LoginForm