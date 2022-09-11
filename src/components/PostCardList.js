import React, { useEffect, useState} from "react";
import PostCard from "./PostCard";

function PostCardList({postcards}) {

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

export default PostCardList;