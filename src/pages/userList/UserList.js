import { useEffect, useState } from 'react';
import { useNavigate, useHistory, Link } from 'react-router-dom';

import axios from 'axios';

import Cookies from 'js-cookie'
import cookie from 'cookie'

const http = axios.create({
    baseURL: 'http://localhost:8000/',
   withCredentials:true,
  })





const isLoggedIn = (reqCookies = null) => {
    // if we don't have request cookies, get the cookie from client
    if (! reqCookies) {
        return !! Cookies.get('ticket_management_is_user_logged_in')
    }

    // otherwise get cookie from server
    return !! cookie.parse(reqCookies).ticket_management_is_user_logged_in
}


console.log(isLoggedIn())


const UserList = () => {
  const[users, setUsers] = useState([])

  const getApiData = async () => {

    const response = await http.get('/users').then((response) => {
    }).then((response) => response.json());
    setUsers(response);
  };

  useEffect(()=>{
    getApiData()
  }, [])

  return (  

    <>
    <table>
    <thead>
      <tr>
          <th>Name</th>
          <th>email</th>
          <th>id</th>
      </tr>
    </thead>

    <tbody>
     
    {   
    users.map((user, key)=> {
    return(
      <>
       <tr>
    <td>{user.name} </td>
    <td>{user.email} </td>
    <td>{key} </td>
    </tr>
    </>
    )}
  )}
    </tbody>
  </table>
  </>
  )


}



export default UserList;