import React from 'react';
import { Redirect } from "react-router-dom";


function Home({ isLoggedIn }) {
  if (!isLoggedIn) return <Redirect to="/login" />;
  
  return (
    <div>
        <h1>A home for a new generation of travelers, photographers and adventure seekers.</h1>
        <h2>Join our community and register below for Free.</h2>
 
    </div>   
  )
}


export default Home;