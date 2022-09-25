import React, { useEffect, useState } from "react";
import PostcardForm from "./PostcardForm";
import PostcardList from "./PostcardList";
import SearchPostcard from "./SearchPostcard";
import PostcardFilter from "./PostcardFilter";

function PostcardPage ({postcards}) {
    
    const postCards = postcards.map((postcard) => {
        return <PostCard image={postcard.image} caption={postcard.caption} city={postcard.city} country={postcard.country} trivia={postcard.trivia}/>
    })
    return (
        <ul className="cards">{postCards}</ul>
    );
}
export default PostCardContainer;

