import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/personalities">Favorite Personalities</Link>
        </li>
        <li className="nav-item">
          <Link to="/cities">Favorite Cities</Link>
        </li>
        <li className="nav-item">
          <Link to="/tourist-spots">Favorite Tourist Spots</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
