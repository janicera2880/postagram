import React, {useState} from "react";

function SearchPostcard({handleSearchChange}) {
  const [currentSearch, setCurrentSearch] = useState("")
  
  function onSubmit(e) {
    e.preventDefault();
    handleSearchChange(currentSearch);
  }

  return (
    <form className="searchbar" onSubmit={onSubmit}>
      <input
        type="text"
        id="search"
        placeholder="Search Destination..."
        value={currentSearch}
        onChange={(e) => setCurrentSearch(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default SearchPostcard;