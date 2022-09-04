import React from "react";

function PostCard ({caption, city, country, trivia, image}){

    return(
        <li classname="card">
            <img src={image} alt={city}/>
            <h4>{caption}</h4>
            <h2>{city}</h2>
            <p>{country}</p>
            <p>{trivia}</p>
        </li>
    )
}
export default PostCard;