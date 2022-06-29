import './NavBar.css'

import { useNavigate, useHistory,} from 'react-router-dom';

export const NavBar = () => {
//  navigate= useNavigate();
  return (
    <nav>
    <div className="nav-wrapper">
      <a href="" className="brand-logo">Sanctum SPA</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
  
        <li><a href="/cadastro">cadastro <span className="new badge">4</span></a></li>
        <li><a href="/usuarios">usuarios</a></li>
        <li><a href="/login">index</a></li>
      </ul>
    </div>
  </nav>
  )
}
