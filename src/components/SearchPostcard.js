import React from "react";

function SearchPostcard({handleSearchChange}) {

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Postcards:</label>
      <select
        type="text"
        onChange= {(e) => handleSearchChange(e)}>
       <option value="All">Search All</option>
          <option value="City">City</option>
          <option value="Country">Country</option>
          <option value="Category">Category</option>
      </select>
    </div>
  );
}

export default SearchPostcard;