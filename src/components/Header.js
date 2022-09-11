import React from "react";
import Logo from '../images/postagramlogo.png'


function Header() {

   
   
    return (
      <div className="logo">
        <header>
            <img id='logoImg' src={Logo} alt="logoImg" />
          
        </header>
        
      </div>
    );
  }
  
  export default Header;