import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {

  const http = axios.create({
    baseURL: 'https://laravel-sanctum-spa.herokuapp.com/',
   withCredentials:true,
  })

  const updateUser = e => {
    e.persist()
    setUser(prevState => ({...prevState, [e.target.name]: e.target.value}))
}

  const login = async(e)=>{
    e.preventDefault();

   await  http.get('/sanctum/csrf-cookie').then(response => {
      console.log('cookie', response)
  })
 /*await http.get('/login').then(response => {
    console.log('login', response)
});*/
  await http.post('/login',user).then(response => {
    console.log('login', response)
});

  }
  const[user, setUser] = useState({email: 'lowell01@example.com', password: 'password'})
  return (
    <div className="">
     {user.email}
     {user.password}
      <form action="" method='POST'>
      <input type="email" name="email" value={user.email} onChange={updateUser} />
      <input type="text" name="password" value={user.password}  onChange={updateUser} />
      <button onClick={login}>enviar</button>
      </form>

    </div>
  );
}

export default App;
