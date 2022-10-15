import React from "react";
import Postcard from "./Postcard";

//To display the list to the DOM, you need to use the map() function and return JSX from the callback function.
function PostcardList({postcards}) {

  const postcardList = postcards.map((postcards) =>
    <Postcard
    key={postcards.id}
    caption={postcards.caption}
    image={postcards.image}
    city={postcards.city}
    country={postcards.country}
    trivia={postcards.trivia}
    />
  )

  return (
    <ul className="grid-container">{postcardList}</ul>
  );
}

export default PostcardList;