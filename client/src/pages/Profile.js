import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const Profile = (props) => {
    return (
        <div>
            <Nav
                authenticated={props.authenticated}
                {...props}
                currentUser={props.currentUser}
            />
            <h1>Profile</h1>
            <Footer/>
        </div>
    )
}

export default Profile