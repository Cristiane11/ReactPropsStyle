import React from 'react';
import airbnb from '../images/airbnb.png';

function NavBar() {
  return (
    <nav className="Nav">
     
        <img src={airbnb} className="logo-image" alt="logo" />
        
    </nav>
  );
}

export default NavBar;
