import React, {useState} from "react";



function Postcard ({caption, city, country, image, trivia}){
    const [favorite, setFavorite] = useState(false)

    function handleFavorite(){
        setFavorite(!favorite)
    }

    return(
      <div className="grid-item">
            <img src={image} width="600" height="300" alt={city}/>
            <h4>{caption}</h4>
            <p>{city}</p>
            <p>{country}</p>
            <p>{trivia}</p>
            
            <div className="details">
              
          {favorite ? (
          <button  onClick={handleFavorite}  className="emoji-button favorite active"><span>Liked💌</span></button>
          ) : (
            <button onClick={handleFavorite} className="emoji-button favorite">Hit Like!✉️</button>
          )}
            
            
        </div>
      </div>  
       
    );
}
export default Postcard;