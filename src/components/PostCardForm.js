import React from "react";

function PostCardForm() {
  return (
    <div className="new-postcard-form">
      <h2>Upload New PostCard</h2>
      <form>
        <input type="text" name="name" placeholder="Caption" />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="text" name="name" placeholder="City" />
        <input type="text" name="name" placeholder="Country" />
        <button type="submit">Upload Now</button>
      </form>
    </div>
  );
}

export default PostCardForm;