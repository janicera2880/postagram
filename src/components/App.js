import React, { useState } from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import Header from "./Header"
import PostcardForm from "./PostcardForm";





function App() {
    const [isDarkMode, setIsDarkMode] = useState(true)
    //console.log({ isDarkMode })//
    
  return (
      <div>
        <main className={isDarkMode ? "dark-mode" : ""}></main>
          
          <Header isDarkMode={isDarkMode} onToggleDarkMode={setIsDarkMode} />
          <Home />
          <NavBar />
         <PostcardForm />
        </div>
              
  )
  }             
export default App;

