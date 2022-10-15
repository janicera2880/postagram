import React from "react";

//Passing data from SearchPostcard component to PostcardPage-parent create callback function handleChangeSearch and
//pass callback function as props this will retrieve data from SearchPostcard function

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