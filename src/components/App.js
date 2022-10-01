import React, { useState, useEffect } from "react";
import { Route, Switch} from "react-router-dom"
import NavBar from "./NavBar";
import Home from "./Home";
import Header from "./Header"
import PostcardForm from "./PostcardForm";
import PostcardPage from "./PostcardPage";





function App() {
  const [postcards, setPostcards] = useState([])
  const [newPostcard, setNewPostcard] = useState({
    caption: "",
      image: "",
      city: "",
      country: "",
      category: "",
      trivia: "",
      language: ""
  })
  
  
  useEffect(() => {
    fetch("http://localhost:3001/postcards")
    .then(response => response.json())
    .then(data => setPostcards(data))
  }, [])
  
  
  function onAddPostcards(newPostcard){  
    const updatedPostcards = [...postcards, newPostcard]
    setPostcards(updatedPostcards)
    setNewPostcard(newPostcard)
  }
  
    
  return (
      <div>
             
          <Header />
          <NavBar />

          <Switch>        
        <Route exact path="/postcards">
          <PostcardPage newPostcard={newPostcard}/>
        </Route>
        <Route path="/postcardform">
          <PostcardForm onAddPostcards={onAddPostcards}/>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <h1>404</h1>
        </Route>
        </Switch>
          
        </div>
              
  )
  }             
export default App;

