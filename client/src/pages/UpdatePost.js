import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const UpdatePost = (props) => {
    return (
        <div>
            <Nav
                authenticated={props.authenticated}
                {...props}
                currentUser={props.currentUser}
            />
            <h1>Update Post</h1>
            <Footer/>
        </div>
    )
}

export default UpdatePost