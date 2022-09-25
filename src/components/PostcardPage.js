import React, { useEffect, useState } from "react";
import PostcardForm from "./PostcardForm";
import PostcardList from "./PostcardList";
import SearchPostcard from "./SearchPostcard";
import PostcardFilter from "./PostcardFilter";

function PostcardPage() {
    const [postcards, setPostcards] = useState([]);
    const [search, setSearch] = useState("");
  
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
    });
  
    return (
      <main>
        <PostcardForm onAddPostcards={onAddPostcards} />
        <SearchPostcard search={search} onSearchChange={setSearch} />
        <PostcardList
          postcards={displayedPostcards}
        />
      </main>
    );
  }
  
  export default PostcardPage;

