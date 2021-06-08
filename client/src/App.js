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
import './styles/App.css'

function App() {
  const [pageLoading, updatePageLoading] = useState(true)

  useEffect(() => {
    updatePageLoading(false)
  }, [])
  return (
    <div className="App">
      {pageLoading ? (
        <h3>Loading...</h3>
      ) : (
        <Switch>
          
        </Switch>
      )}
    </div>
  );
}

export default App;
