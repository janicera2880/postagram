import React, { useState, useEffect } from "react";
import { Route, Switch} from "react-router-dom"
import NavBar from "./NavBar";
import Home from "./Home";
import Header from "./Header"
import PostcardForm from "./PostcardForm";
import PostcardPage from "./PostcardPage";
import Footer from "./Footer";





function App() {
    const [isDarkMode, setIsDarkMode] = useState(true);
    //console.log({ isDarkMode })//
    const [postcards, setPostcards] = useState([]);
    const [newPostcard, setNewPostcard] = useState ("")
    
    useEffect(() => {
      fetch("http://localhost:3001/postcards")
        .then((r) => r.json())
        .then((postcards) => {
          setPostcards(postcards);
        });
    }, []);
  
    function onAddPostcards(newPostcard) {
      const updatedPostcards = [...postcards, newPostcard]
      setPostcards(updatedPostcards)
      setNewPostcard(newPostcard)
    }
  
    
  
    
  return (
      <div>
        <main className={isDarkMode ? "dark-mode" : ""}></main>
          
          <Header isDarkMode={isDarkMode} onToggleDarkMode={setIsDarkMode} />
          <NavBar />

          <Switch>        
        <Route exact path="/postcards">
          <PostcardPage />
        </Route>
        <Route path="/postcardform">
          <PostcardForm uploadPostcards={onAddPostcards}/>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <h1>404</h1>
        </Route>
        </Switch>
          
         
         <Footer />
        </div>
              
  )
  }             
export default App;

