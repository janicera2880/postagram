import React, { useEffect, useState } from "react";
import PostcardForm from "./PostcardForm";
import PostcardList from "./PostcardList";
import SearchPostcard from "./SearchPostcard";


function PostcardPage() {
    const [selectedCategory, setSelectedCategory] = useState([]);
    const [search, setSearch] = useState("");
   
    useEffect(() => {
      fetch("http://localhost:3001/postcards")
        .then((r) => r.json())
        .then((postcardsArray) => {
          setPostcards(postcardsArray);
        });
    }, []);
  
    
  
    const displayedPostcards = postcards.filter((postcard) => {
      return postcard.category.toLowerCase().includes(search.toLowerCase());

    });  
  
    return (
      <main>
       
        <SearchPostcard search={search} onSearchChange={setSearch} />
        <PostcardList postcards={displayedPostcards} />
        
        </main>
    );
  }
  
  export default PostcardPage;

