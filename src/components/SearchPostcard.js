import React from "react";

function SearchPostcard({search, handleChangeSearch}) {
  
    return (
      <div className="search">
       
        <input
          type="text"        
          value={search}
          placeholder="Type a Country to search🔍..."
          onChange={(event) => handleChangeSearch(event.target.value)}
        />
      </div>
    );
  }
export default SearchPostcard;