import React, { useState, useEffect } from 'react';
import ImageCard from "./components/ImageCard";
import ImageFilter from "./components/ImageFilter";
import "./assets/styles.css";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    fetch(`https://picsum.photos/v2/list`)
      .then(res => res.json())
      .then(data => {
        setImages(data);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, [term]);

  return (
    <div className="container mx-auto">
      <h1 className="text-6xl text-center">Picture wall</h1>
      <ImageFilter filterText={(text)=> setTerm(text)}/>
      <div className="grid grid-cols-3 gap-4">
        {images.map(image => (
        <div key={image.id} className="max-w-sm rounded overflow-hidden shadow-lg">
            <img src={image.download_url+term} alt=""  className="photo object-cover mx-auto" />
            <div className="px-6 py-4">
                <div className="font-bold text-purple-500 text-xl mb-2 mx-auto"> photo by {image.author}</div>
            </div>
        </div>
        ))}
      </div>
    </div>
  );
}

export default App;
