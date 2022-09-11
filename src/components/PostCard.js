import React, {useState} from "react";


function PostCard ({caption, city, country, trivia, image}){
    const [favorite, setFavorite] = useState(false)

    function handleFavorite(){
        setFavorite(!favorite)
    }

    return(
        <li classname="card">
            <img src={image} alt={city}/>
            <h4>{caption}</h4>
            <p>{city}</p>
            <p>{country}</p>
            <div className="details">
          {favorite ? (
          <button  onClick={handleFavorite}  className="emoji-button favorite active">Liked💌</button>
          ) : (
            <button onClick={handleFavorite} className="emoji-button favorite">Hit Like!✉️</button>
          )}
          <p>{trivia}</p>
          
        </div>
            
        </li>
    )
}
export default PostCard;