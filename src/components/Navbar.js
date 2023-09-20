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
          <a href={"./application-2cb1a715-a67a-4b3f-8b5e-265ca5a0d571 (1).apk"} download>
            Download APK
          </a>
        </li> */}
        <li className="nav-item">
          <Link to="/stories">Sages' Insights</Link>
        </li>
      </ul>
    </nav>
  );
};


export default Navbar;
