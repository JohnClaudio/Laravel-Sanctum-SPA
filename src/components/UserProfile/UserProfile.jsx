import React from 'react'
import { useState, useContext} from 'react'
import  {IsloggedInContext} from '../../context/isloggedIn';
import http from '../../service/api'
import Cookies from 'js-cookie'
import './UserProfile.css'

const UserProfile = () => {
    const[password, setPassword] = useState()
    const {isloggedIn, setIsloggedIn} = useContext(IsloggedInContext)
    console.log(isloggedIn.email)

    const updateUser = e => {
      e.persist()
      setIsloggedIn(prevState => ({...prevState, [e.target.name]: e.target.value}))
      setPassword(prevState => ({...prevState, [e.target.name]: e.target.value}))
     Cookies.set('user', {name:isloggedIn.name})
    }
  
    const  handleSubmit = async (event) => { 
      event.preventDefault();
      await http.get('/sanctum/csrf-cookie')
      await  http.post('/user/update', {name: isloggedIn.name, email: isloggedIn.email, password: password}).then(response => {
      console.log('update', response)
     });
      
    };


  return (

    <form className="form-profile" action="" onSubmit={handleSubmit}>
    <label className="form-profile__label"  htmlFor="name">nome</label>
    <input className="form-profile__input"  type="text" value={isloggedIn.name} name="name" onChange={updateUser} />
    
    <label className="form-profile__label"  htmlFor="e-mail">E-mail</label>
    <input className="form-profile__input"  value={isloggedIn.email} type="email" name="email" onChange={updateUser} />
    
    <label className="form-profile__label" htmlFor="password">Password</label>
    <input className="form-profile__input" type="password" name="password" onChange={updateUser} />
    <button className="form-profile__button" type='submit'>Update</button>
    </form>
    
  )

 }
export default UserProfile;