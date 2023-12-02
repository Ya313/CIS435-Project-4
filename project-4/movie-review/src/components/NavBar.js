// NavBar.js
import React, { } from 'react';
import './Home.css';

const NavBar = ({ onNavigate }) => {
  return (
    <nav>
      <ul>
        <li onClick={() => onNavigate('home')}>Home</li>
        <li onClick={() => onNavigate('about')}>About Us</li>
      </ul>
    </nav>
  );
};

export default NavBar;
