import React, { useEffect, useState } from "react";
import PostcardForm from "./PostcardForm";
import PostcardList from "./PostcardList";
import SearchPostcard from "./SearchPostcard";
import PostcardFilter from "./PostcardFilter";

function PostcardPage() {
    const [postcards, setPostcards] = useState([]);
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
  
    useEffect(() => {
      fetch("http://localhost:3001/postcards")
        .then((r) => r.json())
        .then((postcardsArray) => {
          setPostcards(postcardsArray);
        });
    }, []);
  
    function onAddPostcards(newPostcard) {
      const updatedPostcardsArray = [...postcards, newPostcard];
      setPostcards(updatedPostcardsArray);
    }
  
    const displayedPostcards = postcards.filter((postcard) => {
      return postcard.category.toLowerCase().includes(search.toLowerCase());

      function onFilterChange(category) {
        setSelectedCategory(category);
      }
    
      const postcardsToDisplay = postcards.filter((postcards) => {
        if (selectedCategory === "All") return true;
    
        return postcards.category === selectedCategory;
      });
    });
  
    return (
     
        <PostcardForm onAddPostcards={onAddPostcards} />
        <SearchPostcard search={search} onSearchChange={setSearch} />
        <PostcardList postcards={displayedPostcards} />
        <POstcardFilter category={selectedCategory} onFilterChange={onFilterChange} />
     
    );
  }
  
  export default PostcardPage;

