import React, {useState} from "react";
import { Link } from "react-router-dom";


function PostCard ({id, caption, city, country, languages, currency, weather, image}){
    const [favorite, setFavorite] = useState(false)

    function handleFavorite(){
        setFavorite(!favorite)
    }

    return(
        <li classname="card">
            <img src={image} width="600" height="400" alt={city}/>
            <h4>{caption}</h4>
            <p>{city}</p>
            <p>{country}</p>
            <div className="details">
          {favorite ? (
          <button  onClick={handleFavorite}  className="emoji-button favorite active">Liked💌</button>
          ) : (
            <button onClick={handleFavorite} className="emoji-button favorite">Hit Like!✉️</button>
          )}
            <p>{currency}</p>
            <p>{languages}</p>
            <p>{weather}</p>
            <Link to={`/Home/${id}`}>View More Postcards!</Link>
        </div>
            
        </li>
    )
}
export default PostCard;