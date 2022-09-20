import React from 'react';
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Header from "./Header"
import PostCardForm from "./PostCardForm";
import SearchPostcard from "./SearchPostcard";
import PostCard from './PostCard';




function App() {
    
  return (
      <div>
          
          <Header />
          <NavBar />
          <Switch>
              
              <Route exact path="/postcardform">
                  <PostCardForm />
              </Route>
              <Route exact path="/">
                  <Home />
              </Route>
              <Route path="/searchpostcard">
                  <SearchPostcard />
              </Route>
              
          </Switch>
      </div>
  );
}

export default App;

