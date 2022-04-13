# Installation Process

Adding RSpec
$ bundle add rspec-rails
$ rails generate rspec:install

Adding React
$ bundle add webpacker
$ bundle add react-rails
$ rails webpacker:install
$ rails webpacker:install:react
$ yarn add @babel/preset-react
$ yarn add @rails/activestorage
$ yarn add @rails/ujs
$ rails generate react:install
$ rails generate react:component App

Adding Devise
$ bundle add devise
$ rails generate devise:install
$ rails generate devise User
$ rails db:migrate

config/environments/development.rb:
config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }

config/initializers/devise.rb:
# Find this line
config.sign_out_via = :delete
# And replace it with this
config.sign_out_via = :get

$ rails generate controller Home
Add a file in app/views/home called index.html.erb
Add the following:
app/views/home/index.html.erb

<%= react_component 'App', {
  logged_in: user_signed_in?,
  current_user: current_user,
  new_user_route: new_user_registration_path,
  sign_in_route: new_user_session_path,
  sign_out_route: destroy_user_session_path
} %>

Add the following:
app/views/layouts/application.html.erb

// Find this line:
<%= javascript_importmap_tags %>

// And replace it with this:
<%= javascript_pack_tag 'application', 'data-turbolinks-track': 'reload' %>

Add the following:
config/routes.rb

get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
root 'home#index'

React Routing
$ yarn add react-router-dom@5.3.0

Adding Reactstrap
$ bundle add bootstrap
$ mv app/assets/stylesheets/application.css app/assets/stylesheets/application.scss
$ yarn add reactstrap

app/assets/stylesheets/application.scss:
@import 'bootstrap';

Apartment Resource
$ rails g resource Apartment street:string city:string state:string manager:string email:string price:string bedrooms:integer bathrooms:integer pets:string image:text user_id:integer
$ rails db:migrate

app/models/apartment.rb:
class Apartment < ApplicationRecord
  belongs_to :user
end

app/models/user.rb:
class User < ApplicationRecord
# Include default devise modules. Others available are
# :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  has_many :apartments
end
