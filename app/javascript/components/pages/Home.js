import React, { Component } from 'react'

class Home extends Component {
  render() {
    return (
      <div>
        <h1 className='center'>Apartment App</h1>
        <p className='center'>Find your next apartment now!</p>
        <div id='app-about'>
          <div id='about-text'>
            <p>
              View apartments in your area. Here at _app_name_, we are dedicated to helping you find your next home. We know how much home means, so we stop at nothing to find the right place for you.
            </p>
            <p>
              If you are a member here at _app_name_, then you can see details about listings as well as create new listings!
            </p>
            <p>
              Don't wait to find your next best home. Register to get started!
            </p>
          </div>
          <img
            id='complex-img'
            alt='apartment complex'
            src='https://images.unsplash.com/photo-1525438160292-a4a860951216?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
          />
        </div>
      </div>
    )
  }
}

export default Home
