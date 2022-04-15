import React, { Component } from 'react'
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardImg,
  CardText
} from 'reactstrap'

class Apartment extends Component {
  render() {
    if (!this.props.apartment) return <p>Apartment not found</p>
    const {
      street,
      city,
      state,
      price,
      bedrooms,
      bathrooms,
      pets,
      manager,
      email,
      image,
      created_at
    } = this.props.apartment
    return (
      <Card>
        <CardHeader>
          {street}, {city}, {state}
        </CardHeader>
        <CardBody>
          <div className='card-flex'>
            <div className='card-text-container'>
              <CardText>
                <strong>Price:</strong> {price}
              </CardText>
              <CardText>
                <strong>Bedrooms:</strong> {bedrooms}
              </CardText>
              <CardText>
                <strong>Bathrooms:</strong> {bathrooms}
              </CardText>
              <CardText>
                <strong>Pets:</strong> {pets}
              </CardText>
              <CardText>
                <strong>Manager:</strong> {manager}
              </CardText>
              <CardText>
                <strong>Email:</strong> {email}
              </CardText>
            </div>
            <CardImg
              alt="Card image cap"
              src={image}
            />
          </div>
        </CardBody>
        <CardFooter>
          Listed On: {new Date(created_at).toLocaleDateString('en-US')}
        </CardFooter>
      </Card>
    )
  }
}

export default Apartment
