import React, { useState } from "react";
import Postcard from "./Postcard";
import PostcardFilter from "./PostcardFilter";
import SearchPostcard from "./SearchPostcard";


function PostcardPage({postcards}) {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [search, setSearch] = useState("");
   
    
    
  
    function onCategoryChange(event) {
      setSelectedCategory(event.target.value)
  }
    function handleSearchChange(newSearch){
    setSearch(newSearch)    
  }
  
    const postcardsToDisplay = postcards.filter((postcard) => {
      if (selectedCategory === "All") return true;
  
      return postcard.category === selectedCategory;
    }).filter(postcard => postcard.category.toLowerCase().includes(search.toLowerCase()));
  
    
  
    return (
      <main>
        <Postcard />
        <SearchPostcard search={handleSearchChange} onSearchChange={onCategoryChange} />
        <PostcardFilter postcards={postcardsToDisplay} />
        
        </main>
    );
  }
  
  export default PostcardPage;

