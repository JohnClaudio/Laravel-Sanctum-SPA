import { useState, useContext, useEffect} from 'react';
import {login, logIn} from '../../service/user_authentication'
import Cookies from 'js-cookie'
import  {IsloggedInContext} from '../../context/isloggedIn';
import './UserLoginForm.css'

export default function UserLogin() {
  useEffect(()=>{

  },[])
    const[user, setUser] = useState({email: 'lowell01@example.com', password: 'password'})
    const[message,setMessage]= useState('')
    const {isloggedIn, setIsloggedIn} = useContext(IsloggedInContext)

    console.log('context', isloggedIn)
    
    const updateUser = e => {
      e.persist()
      setUser(prevState => ({...prevState, [e.target.name]: e.target.value}))
  }

//console.log(Cookies.get('ticket_management_is_user_logged_in'))

  const handleSubmit = (event) => { 
    event.preventDefault();
  /*  let cookie_user = JSON.parse(Cookies.get('user'));
   let name =  cookie_user[0].name;*/
    
   login(user)
    .then(()=>{
      setIsloggedIn({auth:true, email: user.email})
      console.log('context', isloggedIn)
    })





  };
  
  return (


     <form className="form-login" action="" onSubmit={handleSubmit}>
           <label>{message}</label>
     <label className="form-login__label" htmlFor="e-mail">E-mail</label>
     <input className="form-login__input" type="email" name="email" value={user.email} onChange={updateUser} />
   
     <label className="form-login__label" htmlFor="password">Password</label>
     <input className="form-login__input" type="password" name="password" value={user.password}  onChange={updateUser} />
    
     <button className="form-login__button" type='submit'>Login</button>
    <br></br> <a href="">New Member? Sing Up!</a>
     </form>


  
  )
}
