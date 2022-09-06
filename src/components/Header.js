import React from "react";
import Logo from '../images/postagramimg.jpg'


function Header() {

   
   
    return (
      <div className="header">
        <header>
            <img id='logoImg' src={Logo} alt="logoImg" />
          
        </header>
        
      </div>
    );
  }
  
  export default Header;