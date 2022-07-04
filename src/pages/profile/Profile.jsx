import { useState, useEffect, useContext} from 'react'
import {axios_post,axios_get} from '../../service/user_authentication'
import  {IsloggedInContext} from '../../context/isloggedIn';
import http from '../../service/api'
import Cookies from 'js-cookie'
import './Profile.css'
import UserProfile from '../../components/UserProfile/UserProfile';


 const Profile = () => {




  return (

   <div className="container">
   <UserProfile></UserProfile>
   
   <div className="logo">
   <img className="logo__img" src="https://i.imgur.com/wTOOUcN.png" alt="logo laravel" />
   <h4  className='logo__title'></h4>
   </div>

   </div>
 
  )
}
export default Profile
