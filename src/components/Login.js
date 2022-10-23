import React, { useState } from "react";
import { useHistory } from "react-router-dom";

//useHistory hook lets you access the history instance used by React Router- use Push method to navigate to Home after login
//Call useHistory inside component
//Controlled Form

function Login({ setIsLoggedIn }) {
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
   //console.log(formData);
  }

  function handleSubmit(e) {
    e.preventDefault();

    setIsLoggedIn(true);

    // after logging the user in, redirect to the home page!
    history.push("/");
  }

  return (
    <form onSubmit={handleSubmit} className="login">
      <h1>Please Login In Here</h1>
      <label>Enter Username</label>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      <label>Enter Password</label>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <label>Click To Login</label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Login;