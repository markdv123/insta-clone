import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const ViewUser = (props) => {
    return (
        <div>
            <Nav
                authenticated={props.authenticated}
                {...props}
                currentUser={props.currentUser}
            />
            <h1>View User</h1>
            <Footer/>
        </div>
    )
}

export default ViewUser