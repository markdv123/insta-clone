import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const ViewPost = (props) => {
    return (
        <div>
            <Nav
                authenticated={props.authenticated}
                {...props}
                currentUser={props.currentUser}
            />
            <h1>View Post</h1>
            <Footer/>
        </div>
    )
}

export default ViewPost