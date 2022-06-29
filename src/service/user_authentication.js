import http from './api'

import Cookies from 'js-cookie'
import cookie from 'cookie'
import { useNavigate, useHistory } from 'react-router-dom';



const login = async(user)=>{
  //const history = useNavigate();
  await http.get('/sanctum/csrf-cookie').then(response => {

     http.post('/login', user).then(response => {
      if(response.status===202){
        Cookies.set('ticket_management_is_user_logged_in', true, {expires: 86400, sameSite: 'lax'})    
        console.log('login', response)
       // history.push("/perfil");             
      }
  
  })
  
http = null
 
}).catch((response)=>{
  if(response.status===401){

    console.log('opa', response)
   // history.push("/perfil");             
  }
})

}

const logOut = () => {
  if (typeof window !== 'undefined') {

      Cookies.remove('ticket_management_is_user_logged_in', {expires: 86400, sameSite: 'lax'})
     
  }

}



const axios_post = async(user, route)=>{

 await http.get('/sanctum/csrf-cookie')
 await  http.post({route}, user).then(response => {
 console.log({route}, response)
});

}

export { axios_post, login,logOut}