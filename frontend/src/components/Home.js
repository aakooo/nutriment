import React from 'react'
import Layout from './auth/Layout'
import Overview from './auth/Overview'
import LoginForm from './auth/LoginForm'

const Home = () => {

    return (
        <Layout Left={Overview} Right={LoginForm} />
    )
}

export default Home