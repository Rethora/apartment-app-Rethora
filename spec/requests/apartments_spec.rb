require 'rails_helper'

RSpec.describe "Apartments", type: :request do
  describe "POST /create" do
    it 'creating a new apartment without authorization should redirect to log in page' do
      user = User.create(
        email: 'test@test.com',
        password: '123456',
        password_confirmation: '123456'
      )
      apartment_params = {
        apartment: {
          user_id: user.id,
          street: '600 Front St',
          city: 'San Diego',
          state: 'CA',
          manager: 'GreyStar',
          email: 'Info@DiegaByBosa.com',
          price: '$3,700',
          bedrooms: 1,
          bathrooms: 1,
          pets: 'none',
          image: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1084&q=80'
        }
      }

      post '/apartments', params: apartment_params

      expect(response.status).to eq 302
      expect(response.headers['Content-Type']).to eq 'text/html; charset=utf-8'
      expect(document.body).to contain_text 'You are being redirected'
      expect(response.headers['Location']).to eq 'http://www.example.com/users/sign_in'
    end
  end
  describe 'PATCH /update' do
    it 'updating an apartment while not logged in should redirect to log in page' do
      user = User.create(
        email: 'test@test.com',
        password: '123456',
        password_confirmation: '123456'
      )
      Apartment.create(
        user_id: user.id,
        street: '600 Front St',
        city: 'San Diego',
        state: 'CA',
        manager: 'GreyStar',
        email: 'Info@DiegaByBosa.com',
        price: '$3,700',
        bedrooms: 1,
        bathrooms: 1,
        pets: 'none',
        image: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1084&q=80'
      )
      user_two = User.create(
        email: 'test2@test.com',
        password: '123456',
        password_confirmation: '123456'
      )

      apartment_params = {
        apartment: {
          bedrooms: 10000
        }
      }

      patch '/apartments/1', params: apartment_params

      expect(response.status).to eq 302
      expect(response.headers['Content-Type']).to eq 'text/html; charset=utf-8'
      expect(document.body).to contain_text 'You are being redirected'
      expect(response.headers['Location']).to eq 'http://www.example.com/users/sign_in'
    end
  end
end
