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
  constructor(props) {
    super(props)
    this.state = {
      apartments: []
    }
  }

  componentDidMount() {
    this.getAllApartments()
  }

  getAllApartments = async () => {
    try {
      const res = await fetch('/apartments')
      const apartments = await res.json()
      this.setState({ apartments: apartments })
    } catch (err) {
      console.error(err)
    }
  }

  render() {
    const { apartments } = this.state
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
              path='/apartmentsindex'
              exact
              render={(props) => <Apartments apartments={apartments} />}
            />
          </Switch>
        </Container>
      </Router>
    )
  }
}

export default App
