import React, { useState } from 'react';

const PostForm = ({ onSubmit }) => {
  const [concertName, setConcertName] = useState('');
  const [message, setMessage] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ concertName, message, image });
    setConcertName('');
    setMessage('');
    setImage(null);
  };

  return (
    <div className="post-form-modal">
      <div className="post-form">
        <form onSubmit={handleSubmit}>
          <label>
            Concert Name:
            <input
              type="text"
              value={concertName}
              onChange={(e) => setConcertName(e.target.value)}
              className="input-field"
            />
          </label>
          <label>
            Message:
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="input-field"
            />
          </label>
          <label>
            Upload Image:
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              className="input-field"
            />
          </label>
          <button type="submit" className="submit-button">
            Submit Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostForm;
