import React from "react";

function SearchPostcard({handleSearchChange}) {

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Postcards:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a destination to search..."
        onChange= {(e) => handleSearchChange(e)}
      />
    </div>
  );
}

export default SearchPostcard;