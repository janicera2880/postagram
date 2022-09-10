import React from "react";
import PostCard from "./PostCard";

function PostCardContainer({postcards}) {
    
    const postCards = postcards.map((postcard) => {
        return <PostCard image={postcard.image} caption={postcard.caption} city={postcard.city} country={postcard.country}/>
    })
    return (
        <ul classNam="cards">{postCards}</ul>
    );
}
export default PostCardContainer;

