import { Link } from 'react-router-dom';

import './Header.css'

export default function Header() {
  return ( 
    <nav className="header">
      <div className="logo">Teoxon</div> 

      <div className="nav_items">
        <div className="nav_item">
         <Link to="/">Home</Link>
         </div>
        <div className="nav_item"><a href="/Services" target="_blank" rel="noreferrer">Services</a></div>
        <div className="nav_item"><a href="/Product" target="_blank" rel="noreferrer">Product</a></div>
        <div className="nav_item"><a href="/Background" target="_blank" rel="noreferrer">Background</a></div>
        <div className="nav_item"><a href="/Contact" target="_blank" rel="noreferrer">Contact</a>
         </div>
      </div>
      <div className="login_button">
       <Link to="/login">Login</Link>
     </div>
    </nav>
  );
};
