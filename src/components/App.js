import React,{useState, useEffect} from 'react';
import Header from './Header';
import PostCardContainer from './PostCardContainer';



function App() {
  const [postcards, setPostcards] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/postcards")
    .then(response => response.json())
    .then(postcardData => setPostcards(postcardData));
  }, []);


  return (
    <div className="app">
      <Header />
      {postcards.length ? <PostCardContainer postcards={postcards}/> : null}
    </div>
  );
}

export default App;

