import React from "react";
import Cookies from 'js-cookie'
import cookie from 'cookie'

import {
    BrowserRouter ,
    Route,
    Routes, 
  } from "react-router-dom";


import Login from '../pages/login/Login'
import SingUp from '../pages/singUp/SingUp'
import UserList from '../pages/userList/UserList'

const isLoggedIn = (reqCookies = null) => {
  // if we don't have request cookies, get the cookie from client
  if (! reqCookies) {
      return !! Cookies.get('ticket_management_is_user_logged_in')
  }

  // otherwise get cookie from server
  return !! cookie.parse(reqCookies).ticket_management_is_user_logged_in
}

const Rotas = () => {
   return(
    <BrowserRouter>
    <Routes>
      <Route path="/" exact={true} element={<Login />} />
      <Route element = { <Login/> }  path="/login" />
      <Route element = {<SingUp/> }  path="/cadastro"/>
      <Route element =  { isLoggedIn()==true ? <UserList/>: <p>usuario nao autenticado</p>}     path="/usuarios" />       
    </Routes>
  </BrowserRouter>
          
   )
}

export default Rotas;