import React from 'react';
import airbnb from '../images/airbnb.png';

function NavBar() {
  return (
    <nav className="Nav">
     
        <img src={airbnb} className="nav--logo" alt="logo" />
        
    </nav>
  );
}

export default NavBar;
