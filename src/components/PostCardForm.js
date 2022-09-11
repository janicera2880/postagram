import React, {useState} from "react";

function PostCardForm({onAddPostcard}) {

  const [caption, setCaption] = useState("")
  conbst [image, setImage] = useState("")
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
    fetch("http://localhost:3000/postcards", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:
        JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(finalForm => {
        onAddPostcard(finalForm)
  return (
    <div className="new-postcard-form">
      <h2>Upload New PostCard</h2>
      <form onSubmit= {handleSubmit}>
<label>
    Caption:
        <input type="text" name="caption" placeholder="Caption" value = {caption} 
        onChange={e => setCaption(e.target.value)} />
</label>
<label>
  Image URL:
        <input type="text" name="image" placeholder="Image URL" value = {image} 
        onChange={e => setImage(e.target.value)} />
</label>
<label>
    City:
        <input type="text" name="city" placeholder="City" value = {city} 
        onChange={e => setCity(e.target.value)} />
</label>
<label>
    Country:
        <input type="text" name="country" placeholder="Country" value = {country} 
        onChange={e => setCountry(e.target.value)} />
</label>
<label>
    Category:
        <input type="text" name="category" placeholder="Category" value = {category} 
        onChange={e => setCategory(e.target.value)} />
</label>
<label>
    Trivia:
        <input type="text" name="trivia" placeholder="Trivia" value = {trivia} 
        onChange={e => setTrivia(e.target.value)} />
</label>
<label>
    Language:
        <input type="text" name="language" placeholder="Language" value = {language} 
        onChange={e => setLanguage(e.target.value)} />
</label>
        <button type="submit">Upload Now</button>
      </form>
    </div>
  );
}

export default PostCardForm;