import React from 'react'
import UserLogin from '../../components/UserLoginForm/UserLoginForm'
import './Login.css'
function login() {
  return (
      
    <div className="container">


    <UserLogin></UserLogin>
  

    <div className="logo">
    <img className="logo__img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1969px-Laravel.svg.png" alt="logo laravel" />
    <h4  className='logo__title'>React / Laravel Sanctum SPA</h4>
    </div>

    </div>

  )
}

export default login