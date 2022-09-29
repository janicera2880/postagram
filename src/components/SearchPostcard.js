import React from "react";

function SearchPostcard({search, handleSearchChange}) {

  return (
    <div className="searchbar">
       <label htmlFor="search">Search Destination:</label>
      <input
        type="text"
        id="search"
        placeholder="Type here to search..."
        value={search}
        onChange={(e) => handleSearchChange(e.target.value)}
      />
    </div>
  );
}

export default SearchPostcard;