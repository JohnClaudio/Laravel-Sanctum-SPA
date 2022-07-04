import './NavBar.css'
import {} from '../../service/user_authentication'
import  {IsloggedInContext} from '../../context/isloggedIn';

import { useNavigate, useHistory, Link} from 'react-router-dom';
import { useEffect, useState, useContext,  } from 'react';

let authenticate = null
  

export const NavBar = () => {
  const{isloggedIn,setIsloggedIn}= useContext(IsloggedInContext)

  useEffect(()=>{

  if(isloggedIn){
     authenticate = true

  }
  },[isloggedIn])

  const teste = ()=>{
    return(
      <>

         <li><Link to="/usuarios">usuarios</Link></li>
        <li> <Link to="/profile">profile <i className="fa-solid fa-user"></i> </Link></li>
      </>
    )
  }

  

//  navigate= useNavigate();
  return (

    <nav>
    <div className="nav-wrapper">
      <a href="" className="brand-logo">Sanctum SPA</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">

       {authenticate === true ?teste() : ''}
       
       <li> <Link to="/login"> dashboard</Link></li>

       <li> <Link to="/cadastro">cadastro </Link></li> 
   
      </ul>
    </div>

  </nav>
  )
}
