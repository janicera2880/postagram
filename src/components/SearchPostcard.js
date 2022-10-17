import React from "react";

//Passing data from PostcardPage-parent create callback function handleChangeSearch and
//pass callback function as props this will retrieve data 

function SearchPostcard({search, handleChangeSearch}) {
  
    return (
      <div className="search">
       
        <input
          type="text"        
          value={search}
          placeholder="Type a Country to search🔍..."
          
          //onChange attribute fires the moment when the value of the element is changed
          onChange={(event) => handleChangeSearch(event.target.value)}
        />
      </div>
    );
  }
export default SearchPostcard;