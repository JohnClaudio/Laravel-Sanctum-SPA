import { useEffect, useState } from 'react';
import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:8000/',
   withCredentials:true,
  })


const TableUserList = () => {
  const[users, setUsers] = useState([])

  const getApiData = async () => {
    
    const response = await http.get('/users').then((response) => {
      
      setUsers(response.data)
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

    </tr>
    </>
    )}
  )}
    </tbody>
  </table>

  </>
  )


}



export default TableUserList;