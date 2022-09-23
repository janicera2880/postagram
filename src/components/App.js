import React, {useState, useEffect} from 'react';
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Header from "./Header"
import PostCardForm from "./PostCardForm";
import SearchPostcard from "./SearchPostcard";
import Footer from "./Footer"
import PostCard from './PostCard';




function App() {
    const [postcards, setPostcards] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/postcards")
        .then(response => response.json())
        .then(postcards => setPostcards(postcards))
      }, [])
      
    
  return (
      <div>
          
          <Header />
          <NavBar />
          <PostCard />
          <Switch>
              
              <Route exact path="/postcardform">
                  <PostCardForm />
              </Route>
              <Route exact path="/">
                  <Home />
              </Route>
              <Route path="/postcards">
                  <SearchPostcard />
              </Route>
              
          </Switch>
          <Footer />
      </div>
  );
}

export default App;

