import React from "react";



function Home() {
  
  function handleSignUp(event) {
    event.preventDefault()
   // console.log(event.target.username.value)  
  }
  
  return (
    <div>
        <h1>A home for a new generation of travelers, photographers and adventure seekers.</h1>
        <h2>Join our community and register below for Free.</h2>
 
        <form onSubmit={handleSignUp}>
        <h1>Create an Account</h1>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" />

        <label>
        Get Our Newsletter! <input type="checkbox" id="newsletter" />
        </label>

        <input type="submit" value="Sign Up" />
        </form>
    </div>
  );
}


export default Home;