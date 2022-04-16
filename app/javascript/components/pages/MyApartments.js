import React, { Component } from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import { Button, Card, CardBody, CardFooter, CardHeader, CardImg, CardText } from 'reactstrap'

class MyApartments extends Component {
  constructor(props) {
    super(props)
    this.state = {
      deleted: false
    }
  }

  handleDelete = (apartment) => {
    this.props.deleteApartment(apartment)
    this.setState({ deleted: true })
  }

  render() {
    const { userApartments } = this.props
    return (
      <>
        <h1>My Apartments for Rent</h1>
        {userApartments && userApartments.map(apartment => (
          <Card key={apartment.id}>
            <CardHeader>
              <div
                className='card-header-container'
              >
                <span>
                  {apartment.street}, {apartment.city}, {apartment.state}
                </span>
                <div
                  className='card-header-btn-container'
                >
                  <NavLink to={`/editapartment/${apartment.id}`}>
                    <Button
                      className='apartment-btn'
                    >
                      Edit
                    </Button>
                  </NavLink>
                  <Button
                    className='apartment-btn'
                    onClick={() => this.handleDelete(apartment)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardBody>
              <div className='card-flex'>
                <div className='card-text-container'>
                  <CardText>
                    <strong>Price:</strong> {apartment.price}
                  </CardText>
                  <CardText>
                    <strong>Bedrooms:</strong> {apartment.bedrooms}
                  </CardText>
                  <CardText>
                    <strong>Bathrooms:</strong> {apartment.bathrooms}
                  </CardText>
                  <CardText>
                    <strong>Pets:</strong> {apartment.pets}
                  </CardText>
                  <CardText>
                    <strong>Manager:</strong> {apartment.manager}
                  </CardText>
                  <CardText>
                    <strong>Email:</strong> {apartment.email}
                  </CardText>
                  <CardText>
                    <NavLink to={`/apartmentsshow/${apartment.id}`}>
                      View Listing
                    </NavLink>
                  </CardText>
                </div>
                <CardImg
                  alt="Card image cap"
                  src={apartment.image}
                />
              </div>
            </CardBody>
            <CardFooter>
              Listed On: {new Date(apartment.created_at).toLocaleDateString('en-US')}
            </CardFooter>
          </Card>
        ))}
        {this.state.deleted && <Redirect to='/myapartments' />}
      </>
    )
  }
}

export default MyApartments
