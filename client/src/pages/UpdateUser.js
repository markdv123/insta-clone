import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const UpdateUser = (props) => {
    return (
        <div>
            <Nav
                authenticated={props.authenticated}
                {...props}
                currentUser={props.currentUser}
            />
            <h1>Update User</h1>
            <Footer/>
        </div>
    )
}

export default UpdateUser