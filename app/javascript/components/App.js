import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import { Container } from 'reactstrap'
import Navigation from './components/Navigation'
import Apartment from './pages/Apartment'
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
              exact
              path='/'
              component={Home}
            />
            <Route
              exact
              path='/apartmentsindex'
              render={(props) => <Apartments apartments={apartments} />}
            />
            <Route
              path='/apartmentsshow/:id'
              render={(props) => {
                const { id } = props.match.params
                const apartment = apartments.find(apartment => +id === apartment.id)
                return <Apartment apartment={apartment} />
              }}
            />
          </Switch>
        </Container>
      </Router>
    )
  }
}

export default App
