import { useEffect, useState } from 'react';
import {axios_post,axios_get} from '../../service/user_authentication'

import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:8000/',
   withCredentials:true,
  })


function UserSignUpForm() {
  const[user, setUser] = useState({email: 'lowell01@example.com', password: 'password'})
    
  const updateUser = e => {
    e.persist()
    setUser(prevState => ({...prevState, [e.target.name]: e.target.value}))
  }

  const handleSubmit = (event) => { 

    axios_post(user,'/cadastro')
    event.preventDefault();
    
  };
  useEffect(()=>{
    http.get('/users').then((response) => {
      console.log(response.data)
    }) 
  })
  return (
    <form className="form-sign" action="" onSubmit={handleSubmit}>

    <label className="form-sign__label" htmlFor="name">nome</label>
    <input className="form-sign__input" type="text" name="name" onChange={updateUser} />

    <label className="form-sign__label" htmlFor="e-mail">E-mail</label>
    <input className="form-sign__input" type="email" name="email" value={user.email} onChange={updateUser} />
  
    <label className="form-sign__label" htmlFor="password">Password</label>
    <input className="form-sign__input" type="password" name="password" value={user.password}  onChange={updateUser} />
   
    <button className="form-sign__button" type='submit'>cadastrar</button>
    <a href="">Sing Up</a>
    </form>
  )
}

export default UserSignUpForm