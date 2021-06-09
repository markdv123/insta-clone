import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const SignIn = (props) => {
    return (
        <div>
            <Nav
                authenticated={props.authenticated}
                {...props}
                currentUser={props.currentUser}
            />
            <h1>Sign In</h1>
            <Footer/>
        </div>
    )
}

export default SignIn