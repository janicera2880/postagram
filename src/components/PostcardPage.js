import React, { useState, useEffect } from "react";
import PostcardList from "./PostcardList";
import SearchPostcard from "./SearchPostcard";

//Here declare useState hook using const
//First argument state variable are postcards and search then named the function setPostcard and setSearch
//passing empty string and empty array as initial state to the useState hook


function PostcardPage() {

  
    const [postcards, setPostcards] = useState([]);
    const [search, setSearch] = useState("");
    
    //useEffect hook to fetch some data from API
    useEffect(() => {
      fetch("http://localhost:3001/postcards")
        .then((res) => res.json())
        .then((data) => {
           // setting state in the useEffect callback
          setPostcards(data);
        });
    }, []);//also pass in an empty array of dependencies as a second argument this way side effect will
     //only run first time the component renders
   
    function handleChangeSearch(currentSearch) {
      setSearch(currentSearch)
     
    }

  //In Searching by country, use filter method to remove and create new array to also covert string lowercase
    const shownPostcards = postcards.filter((postcard) => {
  

      return postcard.country.toLowerCase().includes(search.toLowerCase());
    });

    return (
      
            
      
      <div className="PostcardPage">
        <SearchPostcard search={search} handleChangeSearch={handleChangeSearch} />
      
        <PostcardList postcards={shownPostcards}  />
      
      </div>
   
    );
  }
  
  export default PostcardPage;

