import React, { useState, useEffect } from "react";
import PostcardList from "./PostcardList";
import SearchPostcard from "./SearchPostcard";


function PostcardPage() {
    const [postcards, setPostcards] = useState([]);
    const [search, setSearch] = useState("");
    useEffect(() => {
      fetch("http://localhost:3001/postcards")
        .then((res) => res.json())
        .then((data) => {
          setPostcards(data);
        });
    }, []);
   
    function handleSearchChange(currentSearch) {
      setSearch(currentSearch)
    }

    const shownPostcards = postcards.filter((postcard) => {
      return postcard.country.toLowerCase().includes(search.toLowerCase());
    });

    return (
      <div className="PostcardPage">
        <SearchPostcard search={search} onSearch={handleSearchChange} />
        <PostcardList postcards={shownPostcards}  />
        
       
        
        </div>
    );
  }
  
  export default PostcardPage;

