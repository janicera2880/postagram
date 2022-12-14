import React, {useState} from "react";
import { useHistory } from "react-router-dom"



function PostcardForm({onAddPostcards}) {
  const history = useHistory();

  const [caption, setCaption] = useState("")
  const [image, setImage] = useState("")
  const [city, setCity] = useState ("")
  const [country, setCountry] = useState("")
  const [category, setCategory] = useState("")
  const [trivia, setTrivia] = useState ("")
  const [language, setLanguage] = useState ("")


  function handleSubmit(event) {
    event.preventDefault()

    const formData = {
      caption: caption,
      image: image,
      city: city,
      country: country,
      category: category,
      trivia: trivia,
      language: language
    }
    fetch("http://localhost:3001/postcards", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:
        JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(finalForm => {
       
        onAddPostcards(finalForm)
      })
      history.push("/postcards")
      setCaption('')
      setImage('')
      setCity('')
      setCountry('')
      setCategory('')
      setTrivia('')
      setLanguage('')
  }
  
  return (
    <div className="newPostcard">
      <h4>Upload New Picture</h4>
      <form onSubmit= {handleSubmit}>
        <br></br>
<label>
    Caption:
        <input type="text" name="caption" placeholder="Caption" value = {caption} 
        onChange={e => setCaption(e.target.value)} />
</label>
<br></br>
<label>
  Image URL:
        <input type="text" name="image" placeholder="Image URL" value = {image} 
        onChange={e => setImage(e.target.value)} />
</label>
<br></br>
<label>
    City:
        <input type="text" name="city" placeholder="City" value = {city} 
        onChange={e => setCity(e.target.value)} />
</label>
<br></br>
<label>
    Country:
        <input type="text" name="country" placeholder="Country" value = {country} 
        onChange={e => setCountry(e.target.value)} />
</label>
<br></br>
<label>
    Category:
        <input type="text" name="category" placeholder="Category" value = {category} 
        onChange={e => setCategory(e.target.value)} />
</label>
<br></br>
<label>
    Trivia:
        <input type="text" name="trivia" placeholder="Trivia" value = {trivia} 
        onChange={e => setTrivia(e.target.value)} />
</label>
<br></br>
<label>
    Language:
        <input type="text" name="language" placeholder="Language" value = {language} 
        onChange={e => setLanguage(e.target.value)} />
</label>
<br></br>
        <button type="submit"><h3>Upload</h3></button>
      </form>
    </div>
  );
}

export default PostcardForm;