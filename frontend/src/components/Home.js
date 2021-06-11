import React from 'react'
import Overview from './auth/Overview'
import LoginForm from './auth/LoginForm'
import { Row, Col } from 'react-bootstrap'

const noPadding = { padding: 0 }

const Home = () => {

    return (
        <Row>
            <Col xs="12" lg="7" style={noPadding}>
                <Overview />
            </Col>

            <Col xs="12" lg="5" style={noPadding}>
                <LoginForm />
            </Col>
        </Row>
    )
}

export default Home