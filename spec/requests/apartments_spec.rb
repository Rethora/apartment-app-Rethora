require 'rails_helper'

RSpec.describe "Apartments", type: :request do
  describe 'user not logged in' do
    it 'should not allow users to create new listings' do
      user = User.create(
        email: 'user@example.com',
        password: 'password',
        password_confirmation: 'password'
      )
      params = {
        apartment: {
          user_id: user.id,
          street: '6345 Gullstrand St',
          city: 'San Diego',
          state: 'CA',
          manager: 'Property Services',
          email: 'info@propertysrv.com',
          price: '$4,875 - $5,075',
          bedrooms: 2,
          bathrooms: 2,
          pets: 'none',
          image: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        }
      }

      post '/apartments', params: params

      expect(response).to have_http_status :unauthorized
      json = JSON.parse(response.body)
      expect(json['error']).to eq 'You must be logged in to create a new listing.'
    end
    it 'should not allow users to update a listing' do
      user = User.create(
        email: 'user@example.com',
        password: 'password',
        password_confirmation: 'password'
      )
      apartment = user.apartments.create(
        street: '6345 Gullstrand St',
        city: 'San Diego',
        state: 'CA',
        manager: 'Property Services',
        email: 'info@propertysrv.com',
        price: '$4,875 - $5,075',
        bedrooms: 2,
        bathrooms: 2,
        pets: 'none',
        image: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
      )
      params = {
        apartment: {
          bedrooms: 1000000
        }
      }

      patch "/apartments/#{apartment.id}", params: params

      expect(response).to have_http_status :unauthorized
      json = JSON.parse(response.body)
      expect(json['error']).to eq 'You do not have permission to update this listing.'
    end
    it 'users should not be able to delete a listing' do
       user = User.create(
        email: 'user@example.com',
        password: 'password',
        password_confirmation: 'password'
      )
      apartment = user.apartments.create(
        street: '6345 Gullstrand St',
        city: 'San Diego',
        state: 'CA',
        manager: 'Property Services',
        email: 'info@propertysrv.com',
        price: '$4,875 - $5,075',
        bedrooms: 2,
        bathrooms: 2,
        pets: 'none',
        image: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
      )

      delete "/apartments/#{apartment.id}"

      expect(response).to have_http_status :unauthorized
      json = JSON.parse(response.body)
      expect(json['error']).to eq 'You do not have permission to delete this listing.'
    end
  end
  describe 'user signed in' do
    it 'should not allow user to create a listing for another user' do
      user = User.create(
        email: 'user@example.com',
        password: 'password',
        password_confirmation: 'password'
      )
      user_two = User.create(
        email: 'user2@example.com',
        password: 'password',
        password_confirmation: 'password'
      )
      sign_in user
      params = {
        apartment: {
          street: '6345 Gullstrand St',
          city: 'San Diego',
          state: 'CA',
          manager: 'Property Services',
          email: 'info@propertysrv.com',
          price: '$4,875 - $5,075',
          bedrooms: 2,
          bathrooms: 2,
          pets: 'none',
          image: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          user_id: user_two.id
        }
      }

      post '/apartments', params: params

      expect(response).to have_http_status :forbidden
      json = JSON.parse(response.body)
      expect(json['error']).to eq 'You cannot create a listing for another user.'
    end
    it "should not allow user to update another users listing" do
      user = User.create(
        email: 'user@example.com',
        password: 'password',
        password_confirmation: 'password'
      )
      user_two = User.create(
        email: 'user2@example.com',
        password: 'password',
        password_confirmation: 'password'
      )
      apartment = user_two.apartments.create(
        street: '6345 Gullstrand St',
        city: 'San Diego',
        state: 'CA',
        manager: 'Property Services',
        email: 'info@propertysrv.com',
        price: '$4,875 - $5,075',
        bedrooms: 2,
        bathrooms: 2,
        pets: 'none',
        image: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
      )
      params = {
        bedrooms: 100000
      }
      sign_in user

      patch "/apartments/#{apartment.id}", params: params

      expect(response).to have_http_status :forbidden
      json = JSON.parse(response.body)
      expect(json['error']).to eq 'You do not have permission to update this listing.'
    end
    it "should not allow users to delete another user's listing" do
      user = User.create(
        email: 'user@example.com',
        password: 'password',
        password_confirmation: 'password'
      )
      user_two = User.create(
        email: 'user2@example.com',
        password: 'password',
        password_confirmation: 'password'
      )
      apartment = user_two.apartments.create(
        street: '6345 Gullstrand St',
        city: 'San Diego',
        state: 'CA',
        manager: 'Property Services',
        email: 'info@propertysrv.com',
        price: '$4,875 - $5,075',
        bedrooms: 2,
        bathrooms: 2,
        pets: 'none',
        image: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
      )
      sign_in user

      delete "/apartments/#{apartment.id}"

      expect(response).to have_http_status :forbidden
      json = JSON.parse(response.body)
      expect(json['error']).to eq 'You do not have permission to delete this listing.'
    end
  end
end
