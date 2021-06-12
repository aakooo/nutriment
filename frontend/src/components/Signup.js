import React from 'react'
import Overview from './auth/Overview'
import Layout from './auth/Layout'
import SignupForm from './auth/SignupForm'

const Signup = () => {

    return (
        <div>
            <Layout Left={Overview} Right={SignupForm} />
        </div>
    )
}

export default Signup