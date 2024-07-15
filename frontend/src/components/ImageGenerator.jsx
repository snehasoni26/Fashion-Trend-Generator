import React, { useState } from 'react';
import axios from 'axios';

export const ImageGenerator = () => {
  const [keyword, setKeyword] = useState('');
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/generate?keyword=${keyword}`);
      setImages(response.data);
    } catch (error) {
      console.error("Error fetching images", error);
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={keyword} 
        onChange={(e) => setKeyword(e.target.value)} 
        placeholder="Enter keyword"
      />
      <button onClick={fetchImages}>Generate Images</button>
      <div>
        {images.map((image, index) => (
          <img key={index} src={`data:image/png;base64,${image}`} alt="Generated Fashion" />
        ))}
      </div>
    </div>
  );
}
