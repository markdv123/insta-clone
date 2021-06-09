import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const Home = (props) => {
    return (
        <div>
            <Nav
                authenticated={props.authenticated}
                {...props}
                currentUser={props.currentUser}
            />
            <h1>Home</h1>
            <Footer/>
        </div>
    )
}

export default Home