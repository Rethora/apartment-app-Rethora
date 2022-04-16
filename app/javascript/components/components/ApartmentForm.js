import React, { Component } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'

class ApartmentForm extends Component {
  render() {
    const { form, handleChange, handleSubmit } = this.props
    return (
      <Form>
        <FormGroup>
          <Label
            for="street"
          >
            Street
          </Label>
          <Input
            type="text"
            name="street"
            value={form.street}
            onChange={(e) => handleChange(e)}
          />
        </FormGroup>
        <FormGroup>
          <Label
            for="city"
          >
            City
          </Label>
          <Input
            type="text"
            name="city"
            value={form.city}
            onChange={(e) => handleChange(e)}
          />
        </FormGroup>
        <FormGroup>
          <Label
            for="state"
          >
            State
          </Label>
          <Input
            type="text"
            name="state"
            value={form.state}
            onChange={(e) => handleChange(e)}
          />
        </FormGroup>
        <FormGroup>
          <Label
            for="manager"
          >
            Manager
          </Label>
          <Input
            type="text"
            name="manager"
            value={form.manager}
            onChange={(e) => handleChange(e)}
          />
        </FormGroup>
        <FormGroup>
          <Label
            for="email"
          >
            Email
          </Label>
          <Input
            type="email"
            name="email"
            value={form.email}
            onChange={(e) => handleChange(e)}
          />
        </FormGroup>
        <FormGroup>
          <Label
            for="price"
          >
            Price
          </Label>
          <Input
            type="text"
            name="price"
            value={form.price}
            onChange={(e) => handleChange(e)}
          />
        </FormGroup>
        <FormGroup>
          <Label
            for="bedrooms"
          >
            Bedrooms
          </Label>
          <Input
            type="number"
            name="bedrooms"
            value={form.bedrooms}
            onChange={(e) => handleChange(e)}
          />
        </FormGroup>
        <FormGroup>
          <Label
            for="bathrooms"
          >
            Bathrooms
          </Label>
          <Input
            type="number"
            name="bathrooms"
            value={form.bathrooms}
            onChange={(e) => handleChange(e)}
          />
        </FormGroup>
        <FormGroup>
          <Label
            for="pets"
          >
            Pets
          </Label>
          <Input
            type="text"
            name="pets"
            value={form.pets}
            onChange={(e) => handleChange(e)}
          />
        </FormGroup>
        <FormGroup>
          <Label
            for="image"
          >
            Image
          </Label>
          <Input
            type="text"
            name="image"
            value={form.image}
            onChange={(e) => handleChange(e)}
          />
        </FormGroup>
        <FormGroup
          style={{ textAlign: 'right' }}
        >
          <Button
            onClick={() => handleSubmit()}
          >
            Create
          </Button>
        </FormGroup>
      </Form>
    )
  }
}

export default ApartmentForm
