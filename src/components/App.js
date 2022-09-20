import React,{useState} from 'react';
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import PostCardForm from "./PostCardForm";
import SearchPostcard from "./SearchPostcard";
import PostCard from './PostCard';




function App() {
    
  return (
      <div>
          <NavBar />
          <Switch>
              <Route path="/home">
                  <Home />
              </Route>
              <Route exact path="/postcardform">
                  <PostCardForm />
              </Route>
              <Route path="/searchpostcard">
                  <SearchPostcard />
              </Route>
              <Route path="/postcard/:id">
                  <PostCard />
              </Route>
              <Route exact path="/">
                  <Home />
              </Route>
              <Route path="*">
                  <h1>404 not found</h1>
              </Route>
          </Switch>
      </div>
  );
}

export default App;

