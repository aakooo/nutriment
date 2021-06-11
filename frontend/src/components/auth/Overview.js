import React from 'react'
import logo from '../../img/oversee-logo.png'

const Overview = () => {


    return (
        <div style={{padding: '3vw'}}>
            <img 
                src={logo}
                alt=""
                style = {{width: '35%', minWidth: '150px'}} />

            <h3>The most efficient way to handle projects</h3>
        </div>
    )
}

export default Overview