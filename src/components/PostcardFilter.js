import React from "react";


function Filter({onFilterChange}) {
  return (    
      <div className="filter">
        <label>Other Options</label>        
        <select name="filter" onChange={onFilterChange} >
          <option value="All">All</option>
          <option value="Category">Category</option>
          <option value="City">City</option>
          <option value="Country">Country</option>
          <option value="Language">Language</option>
          
        </select>
      </div>
  );
}

export default Filter;