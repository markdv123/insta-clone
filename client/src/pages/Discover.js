import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const Discover = (props) => {
    return (
        <div>
            <Nav
                authenticated={props.authenticated}
                {...props}
                currentUser={props.currentUser}
            />
            <h1>Discover</h1>
            <Footer/>
        </div>
    )
}

export default Discover