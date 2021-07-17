import React from 'react';
import personalLogo from "./assets/images/personalLogo.png" 

function Header() {
    return (
      <header className="header">
            <h1>Mohit ARORA</h1>
            <img src={personalLogo} alt="personal-Logo"></img>
      </header>
    );
  }
  
  export default Header;