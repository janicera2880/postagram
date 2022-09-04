import React from "react";


function Header() {

   
    const appClass = false ? "App dark" : "App light"
  
    return (
      <div className={appClass}>
        <header>
            <h2>Postagram</h2>
          
          <button>Dark Mode</button>
        </header>
        
      </div>
    );
  }
  
  export default Header;