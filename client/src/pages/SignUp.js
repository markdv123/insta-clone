import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const SignUp = (props) => {
    return (
        <div>
            <Nav
                authenticated={props.authenticated}
                {...props}
                currentUser={props.currentUser}
            />
            <h1>Sign up</h1>
            <Footer/>
        </div>
    )
}

export default SignUp