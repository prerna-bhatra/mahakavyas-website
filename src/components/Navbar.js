import React from 'react';
import { Link } from 'react-router-dom'; 

import './navbar.css';


const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact">Contact</Link>
        </li>
        {/* <li className="nav-item">
          <Link to="/new-controller">New Controller</Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
