import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import ApartmentForm from '../components/ApartmentForm'

class EditApartment extends Component {
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

  componentDidMount() {
    const { id, ...rest } = this.props.apartment
    this.setState({ form: rest })
  }

  handleChange = e => {
    const { form } = this.state
    form[e.target.name] = e.target.value
    this.setState({ form: form })
  }

  handleSubmit = () => {
    this.props.updateApartment(this.state.form, this.props.apartment.id)
    this.setState({ submitted: true })
  }

  render() {
    const { form, submitted } = this.state
    return (
      <>
        <h1>Edit Apartment</h1>
        <ApartmentForm
          form={form}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        {submitted && <Redirect to={`/apartmentsshow/${this.props.apartment.id}`} />}
      </>
    )
  }
}

export default EditApartment
