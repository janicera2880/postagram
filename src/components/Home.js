import React from "react";



function Home() {
  
  function handleSignUp(event) {
    event.preventDefault()
    console.log(event.target.username.value)  
  }
  
  return (
    <form onSubmit={handleSignUp}>
      <h1>Create an Account</h1>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" />

      <label htmlFor="password">Password</label>
      <input type="password" id="password" />

      <label htmlFor="type">Account Type</label>
      <select id="type">
        <option value="free">Free</option>
        <option value="pro">VIP</option>
      </select>

      <input type="submit" value="Sign Up" />
    </form>
  );
}


export default Home;