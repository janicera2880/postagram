import React, {useState} from "react";



function Postcard ({caption, city, country, languages, currency, weather, image}){
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
            
        </div>
            
        </li>
    )
}
export default Postcard;