import React, { useState, useEffect } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'
import Discover from './pages/Discover'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import CreatePost from './pages/CreatePost'
import UpdateUser from './pages/UpdateUser'
import UpdatePost from './pages/UpdatePost'
import ViewPost from './pages/ViewPost'
import ViewUser from './pages/ViewUser'
import { __CheckSession } from './services/UserServices'
import './styles/App.css'

function App() {
  const [pageLoading, updatePageLoading] = useState(true)
  const [authenticated, updateAuthenticated] = useState(false)
  const [currentUser, updateUser] = useState(null)

  useEffect(() => {
    updatePageLoading(false)
    verifyToken()
  }, [])

  const verifyToken = async () => {
    const token = localStorage.getItem('token')
    if (token) {
      try {
        const session = await __CheckSession()
        updateUser(session.user)
        updateAuthenticated(true)
        props.history.push(window.location.pathname)
      } catch (error) {
        updateUser(null)
        updateAuthenticated(false)
        localStorage.clear()
      }
    }
  }

  const toggleAuthenticated = (value, user) => {
    updateAuthenticated(value)
    updateUser(user)
  }

  return (
    <div className="App">
      {pageLoading ? (
        <h3>Loading...</h3>
      ) : (
        <Switch>
          <Route 
            exact path="/"
            component={(props)=> (
              <Home 
                currentUser={currentUser}
                authenticated={authenticated}
                />
            )}
          />
          <Route
            path='/discover'
            component={(props) => (
              <Discover
                {...props}
                currentUser={currentUser}
                authenticated={authenticated}/>
            )}
          />
          <Route
            path='/register'
            component={(props) => (
              <SignUp
                {...props}
                toggleAuthenticated={toggleAuthenticated}
                currentUser={currentUser}
                authenticated={authenticated}/>
            )}
          />
          <Route
            path='/login'
            component={(props) => (
              <SignIn
                {...props}
                toggleAuthenticated={toggleAuthenticated}
                currentUser={currentUser}
                authenticated={authenticated}/>
            )}
          />
          <Route
            path='/posts/:post_id'
            component={(props) => (
              <ViewPost
                {...props}
                currentUser={currentUser}
                authenticated={authenticated}/>
            )}
          />
          <Route
            path='/users/:user_id'
            component={(props) => (
              <ViewUser
                {...props}
                currentUser={currentUser}
                authenticated={authenticated}/>
            )}
          />
        </Switch>
      )}
    </div>
  );
}

export default withRouter(App)
