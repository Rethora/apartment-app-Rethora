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
import EditApartment from './pages/EditApartment'
import Home from './pages/Home'
import MyApartments from './pages/MyApartments'
import NewApartment from './pages/NewApartment'

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

  createNewApartment = async (apartment) => {
    const newApartment = {
      ...apartment,
      user_id: this.props.current_user.id
    }

    const options = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ apartment: newApartment })
    }

    try {
      await fetch('/apartments', options)
      this.getAllApartments()
    } catch (err) {
      console.error(err)
    }
  }

  updateApartment = async (apartment, apartmentId) => {
    if (this.props.current_user.id !== apartment.user_id) return

    const options = {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ apartment: apartment })
    }

    try {
      await fetch(`/apartments/${apartmentId}`, options)
      this.getAllApartments()
    } catch (err) {
      console.error(err)
    }
  }

  render() {
    const { apartments } = this.state
    const {
      logged_in,
      current_user
    } = this.props
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
            {logged_in &&
              <Route
                exact
                path='/myapartments'
                render={(props) => {
                  const userApartments = apartments.filter(apartment => apartment.user_id === current_user.id)
                  return <MyApartments userApartments={userApartments} />
                }}
              />
            }
            {logged_in &&
              <Route
                exact
                path='/newapartment'
                render={(props) => <NewApartment createNewApartment={this.createNewApartment} />}
              />
            }
            {logged_in &&
              <Route
                path='/editapartment/:id'
                render={(props) => {
                  const { id } = props.match.params
                  const apartment = apartments.find(apartment => +id === apartment.id)
                  return <EditApartment apartment={apartment} updateApartment={this.updateApartment} />
                }}
              />
            }
          </Switch>
        </Container>
      </Router>
    )
  }
}

export default App
