import './App.css';

import UserLogin from './components/UserLoginForm/UserLoginForm'
import {IsloggedInContextProvider} from './context/isloggedIn';
import {BrowserRouter} from "react-router-dom";

import Rotas from './routes/Routes'

import { NavBar } from './components/NavBar/NavBar';
import UserSignUpForm from './components/UserSignUpForm/UserSignUpForm';
function App() {

  return (
    
  <IsloggedInContextProvider>
   
    <NavBar></NavBar>
    <Rotas/>
   
  </IsloggedInContextProvider>

    
  );
}

export default App;
