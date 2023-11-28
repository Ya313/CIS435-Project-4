import React from 'react';

const NavBar = ({ onNavigate }) => {
  return (
    <nav>
      <ul>
        <li onClick={() => onNavigate('home')}>Home</li>
        <li onClick={() => onNavigate('about')}>About Us</li>
        <li onClick={() => onNavigate('categories')}>Categories</li>
        {/* Add more navigation items as needed */}
      </ul>
    </nav>
  );
};

export default NavBar;
