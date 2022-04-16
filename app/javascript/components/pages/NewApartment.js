import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import ApartmentForm from '../components/ApartmentForm'

class NewApartment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        street: '',
        city: '',
        state: '',
        manager: '',
        email: '',
        price: '',
        bedrooms: '',
        bathrooms: '',
        pets: '',
        image: ''
      },
      submitted: false
    }
  }

  handleChange = e => {
    const { form } = this.state
    form[e.target.name] = e.target.value
    this.setState({ form: form })
  }

  handleSubmit = () => {
    this.props.createNewApartment(this.state.form)
    this.setState({ submitted: true })
  }

  render() {
    const { form, submitted } = this.state
    return (
      <>
        <h1>New Apartment</h1>
        <ApartmentForm
          form={form}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        {submitted && <Redirect to='/apartmentsindex' />}
      </>
    )
  }
}

export default NewApartment
