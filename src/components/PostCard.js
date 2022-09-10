import React from "react";

function PostCard ({caption, city, country, trivia, image}){
    const [favorite, setFavorite] = useState(false)

    function handleFavorite(){
        setFavorite(!favorite)
    }

    return(
        <li classname="card">
            <img src={image} alt={city}/>
            <h4>{caption}</h4>
            <h2>{city}</h2>
            <h2>{country}</h2>
            <div className="details">
          {favorite ? (
          <button  onClick={handleFavorite}  className="emoji-button favorite active">💌</button>
          ) : (
            <button onClick={handleFavorite} className="emoji-button favorite">✉️</button>
          )}
          <strong>{trivia}</strong>
          <span> · {category}</span>
        </div>
            
        </li>
    )
}
export default PostCard;