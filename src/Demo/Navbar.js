import React from 'react';
import {Link} from 'react-router-dom';
import logo from './IMAGES/logo.png';

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-white navbar-white shadow-lg">
  <div className="nav container">

    <div>
       <img src={logo} alt='lg'style={{width:50}}/><span className='Plotlist text-black'><b>Plotlist</b> </span>
    </div>

    <div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">HOME</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/category">CATEGORY</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/listing">LISTING</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact-us">CONTACT US</Link>
        </li>
      </ul>
      <button type="button" class=" hide ms-4 btn btn-outline-success text-light"><span><i class="pluslogo fa-solid fa-plus"></i></span>Add Your Listing</button>
    </div>
    </div>

    
    
  </div>
</nav>
    </div>
  )
}
