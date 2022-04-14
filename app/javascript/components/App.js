import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import { Container } from 'reactstrap'
import Navigation from './components/Navigation'
import Apartments from './pages/Apartments'
import Home from './pages/Home'

class App extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    console.log("logged_in:", logged_in)
    console.log("current_user:", current_user)
    console.log("new_user_route:", new_user_route)
    console.log("sign_in_route:", sign_in_route)
    console.log("sign_out_route:", sign_out_route)
    return (
      <Router>
        <Navigation {...this.props} />
        <Container className='page-content'>
          <Switch>
            <Route
              path='/'
              exact
              component={Home}
            />
            <Route
              path='/apartmentindex'
              exact
              component={Apartments}
            />
          </Switch>
        </Container>
      </Router>
    )
  }
}

export default App
