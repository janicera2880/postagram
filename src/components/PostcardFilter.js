import React from "react";


function Filter({category, onCategoryChange}) {
  rreturn (
    <div className="Filter">
      <select
        name="filter"
        value={category}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="All">Filter By Category</option>
        <option value="Beach">Beach</option>
        <option value="Mountain">Mountain</option>
        <option value="Island">Island</option>
        <option value="Volcano">Volcano</option>
        <option value="Landmark">Landmark</option>
        <option value="Lake">Lake</option>
      </select>
    </div>
  );
}

export default Filter;