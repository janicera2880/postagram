import React, {useState} from "react";



function Postcard ({caption, city, country, image, trivia}){
    const [favorite, setFavorite] = useState(false)

    function handleFavorite(){
        setFavorite(!favorite)
    }

    return(
        <li classname="card">
            <img src={image} width="500" height="300" alt={city}/>
            <h4>{caption}</h4>
            <p>{city}</p>
            <p>{country}</p>
            <p>{trivia}</p>
            <div className="details">
          {favorite ? (
          <button  onClick={handleFavorite}  className="emoji-button favorite active">Liked💌</button>
          ) : (
            <button onClick={handleFavorite} className="emoji-button favorite">Hit Like!✉️</button>
          )}
            
            
        </div>
            
        </li>
    );
}
export default Postcard;