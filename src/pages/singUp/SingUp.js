import React from 'react'
import UserSignUpForm from '../../components/UserSignUpForm/UserSignUpForm'
import './SingUp.css'
const signUp = () => {
  return (

    <div className="container">
    <UserSignUpForm></UserSignUpForm>

    <div className="logo">
    <img className="logo__img" src="https://i.imgur.com/FcAmfde.png" alt="logo laravel" />
    <h4  className='logo__title'>React / Laravel Sanctum SPA</h4>
    </div>

    </div>


  )
}

export default signUp;