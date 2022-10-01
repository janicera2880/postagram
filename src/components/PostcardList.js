import React from "react";
import Postcard from "./Postcard";

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