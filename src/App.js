import './App.css';

import UserLogin from './components/UserLoginForm/UserLoginForm'

import Rotas from './routes/Routes'

import { NavBar } from './components/NavBar/NavBar';
import UserSignUpForm from './components/UserSignUpForm/UserSignUpForm';
function App() {

  return (
    <>


  <NavBar></NavBar>
  <Rotas/>
    </>
  );
}

export default App;
