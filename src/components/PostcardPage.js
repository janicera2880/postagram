import React, { useState } from "react";
import PostcardList from "./PostcardList";
import SearchPostcard from "./SearchPostcard";



function PostcardPage({postcards}) {
  
    const [search, setSearch] = useState("");
       
    function handleChangeSearch(currentSearch) {
      setSearch(currentSearch)
    // console.log('I have searched')
    }

  //In Searching by country, use filter method to remove and create new array to also convert string lowercase
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

