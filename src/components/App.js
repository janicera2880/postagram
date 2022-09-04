import React,{useState, useEffect} from 'react'
import { Route, Switch} from "react-router-dom"
import Header from './Header';

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
      
      
    </div>
  );
}

export default App;
