import React, { useState, useEffect } from 'react';
import ImageCard from "./components/ImageCard";
import ImageFilter from "./components/ImageFilter";
import Modal from './components/Modal';

function App() {
  const [images, setImages] = useState([]);
  //const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');
  const [selectedImg, setSelectedImg] = useState(null);

  useEffect(() => {
    fetch(`https://picsum.photos/v2/list`)
      .then(res => res.json())
      .then(data => {
        setImages(data);
      })
      .catch(err => console.log(err));
  }, [term]);

  return (
    <div className="container mx-auto">
      <h1 className="text-6xl text-center">Picture wall</h1>
      <ImageFilter filterText={(text)=> setTerm(text)}/>
      <div className="grid grid-cols-3 gap-4">
        {images.map(image => (
          <ImageCard key={image.id} image={image} term={term} setSelectedImg={setSelectedImg}/>
        ))}
      </div>
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
    </div>
  );
}

export default App;
