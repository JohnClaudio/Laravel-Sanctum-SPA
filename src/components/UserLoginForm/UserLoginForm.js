import { useState } from 'react';
import {login, logIn} from '../../service/user_authentication'
import Cookies from 'js-cookie'
import cookie from 'cookie'

import './UserLoginForm.css'

export default function UserLogin() {
    const[user, setUser] = useState({email: 'lowell01@example.com', password: 'password'})
    const[message,setMessage]= useState('')
    
    const updateUser = e => {
      e.persist()
      setUser(prevState => ({...prevState, [e.target.name]: e.target.value}))
  }

console.log(Cookies.get('ticket_management_is_user_logged_in'))
  const handleSubmit = (event) => { 
    event.preventDefault();

    login(user)
    .then(setMessage(''))
    .catch(setMessage('Credenciais invalidas'))


  /*  if(logar===true){
      event.preventDefault();
      console.log('true')

 
    }else{
      event.preventDefault();
      console.log('passou fora')
    }*/


  };
  
  return (


     <form className="form-login" action="" onSubmit={handleSubmit}>
           <label>{message}</label>
     <label className="form-login__label" htmlFor="e-mail">E-mail</label>
     <input className="form-login__input" type="email" name="email" value={user.email} onChange={updateUser} />
   
     <label className="form-login__label" htmlFor="password">Password</label>
     <input className="form-login__input" type="password" name="password" value={user.password}  onChange={updateUser} />
    
     <button className="form-login__button" type='submit'>enviar</button>
    <br></br> <a href="">Sing Up</a>
     </form>


  
  )
}
