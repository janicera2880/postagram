import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import Header from "./Header"
import PostcardForm from "./PostcardForm";
import PostcardList from "./PostcardList";
import PostcardPage from "./PostcardPage";





function App() {
    const [isDarkMode, setIsDarkMode] = useState(true)
    //console.log({ isDarkMode })//
    const [selectedCategory, setSelectedCategory] = useState("All");
    
    
    useEffect(()=> {
      fetch("http://localhost:3001/postcards")
      .then(response => response.json())
      .then(postcards => setPostcards(postcards))
    }, [])
    
  return (
      <div>
        <main className={isDarkMode ? "dark-mode" : ""}></main>
          
          <Header isDarkMode={isDarkMode} onToggleDarkMode={setIsDarkMode} />
          <Home />
          <NavBar />
          <PostcardPage />
          <PostcardList />
         <PostcardForm />
        </div>
              
  )
  }             
export default App;

