import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import Header from "./Header"
import PostcardForm from "./PostcardForm";
import PostcardPage from "./PostcardPage";





function App() {
    const [isDarkMode, setIsDarkMode] = useState(true);
    //console.log({ isDarkMode })//
    const [postcards, setPostcards] = useState([]);
    
    useEffect(() => {
      fetch("http://localhost:3001/postcards")
        .then((r) => r.json())
        .then((postcards) => {
          setPostcards(postcards);
        });
    }, []);
  
    function onAddPostcards(newPostcard) {
      const updatedPostcards = [...postcards, newPostcard];
      setPostcards(updatedPostcards);
    }
  
    
  
    
  return (
      <div>
        <main className={isDarkMode ? "dark-mode" : ""}></main>
          
          <Header isDarkMode={isDarkMode} onToggleDarkMode={setIsDarkMode} />
          <Home />
          <NavBar />
          <PostcardPage />
         <PostcardForm uploadPostcards={onAddPostcards}/>
        </div>
              
  )
  }             
export default App;

