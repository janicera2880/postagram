import React,{useState, useEffect} from 'react'
import { Route, Switch} from "react-router-dom"
import Header from './Header';
import NavBar from "./NavBar";


function App() {
  const [postcards, setPostcards] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/postcards")
    .then(response => response.json())
    .then(data => setPostcards(data))
  }, [])


  return (
    <div>
      
      <Header />
      <NavBar />
      
    <Switch>
    
    
    </Switch> 
    </div>
  );
}

export default App;
