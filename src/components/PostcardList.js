import React from "react";
import PostCard from "./PostCard";

function PostcardList({postcards}) {

  const postcardList = postcards.map((postcards) =>
    <PostCard
    key={postcards.id}
    caption={postcards.caption}
    image={postcards.image}
    city={postcards.city}
    country={postcards.country}
    trivia={postcards.trivia}
    />
  )

  return (
    <ul className="cards">{postcardList}</ul>
  );
}

export default PostcardList;