import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom"
import NavBar from "./NavBar";
import Home from "./Home";
import Header from "./Header";
import Login from "./Login";
import PostcardForm from "./PostcardForm";
import PostcardPage from "./PostcardPage";



function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [postcards, setPostcards] = useState([])
  
  
  useEffect(() => {
    fetch("http://localhost:3001/postcards")
    .then(response => response.json())
    .then(data => setPostcards(data))
    
  }, [])
  

  function onAddPostcards(newPostcard){  
    const updatedPostcards = [...postcards, newPostcard]
    setPostcards(updatedPostcards)
   
  }
  
    
  return (
      <div>
          
          <Header />
          <NavBar />
 
        <Switch>        
          <Route path="/postcards">
            <PostcardPage postcards={postcards}/>
          </Route>
          <Route path="/login">
            <Login setIsLoggedIn={setIsLoggedIn} />
          </Route>
          <Route path="/postcardform">
            <PostcardForm onAddPostcards={onAddPostcards}/>
          </Route>
          <Route exact path="/">
            <Home isLoggedIn={isLoggedIn}/>
          </Route>
          <Route path="*">
            <h1>404 Not Found</h1>
          </Route>
        </Switch>
          
        </div>
              
  )
  }             
export default App;

