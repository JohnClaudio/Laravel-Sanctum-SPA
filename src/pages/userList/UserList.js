import React from 'react'
import TableUserList from '../../components/TableUserList/TableUserList'


export const UserList = () => {
  return ( 
   <div className="container">
   <TableUserList></TableUserList>
   
   <div className="logo">
   <img className="logo__img" src="https://i.imgur.com/wTOOUcN.png" alt="logo laravel" />
   <h4  className='logo__title'>Profile</h4>
   </div>

   </div>
  )
}

export default UserList
