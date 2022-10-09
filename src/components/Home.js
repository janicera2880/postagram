import React from 'react';
import homeImg from "../images/homeImg.jpg"
import { Redirect } from "react-router-dom";


function Home({ isLoggedIn }) {
  if (!isLoggedIn) return <Redirect to="/login" />;
  
  return (
    <div>
      <h2>WELCOME FELLOW POSTAGRAMERS</h2>
      <h1>A home for a new generation of travelers, photographers and adventure seekers.</h1>
      <h1>Browse popular destinations all over the world in the Search link...</h1>
      <h1>and feel free to share your own experience and fill up the Upload form.</h1>
      <img id="homeImg" src={homeImg} alt="homeImg" className="center"/>
        
        
    </div>   
  )
}


export default Home;