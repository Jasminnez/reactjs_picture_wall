import React from "react";
import "../assets/styles.css";

const ImageCard = ({image, term, setSelectedImg}) => {

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg"
            onClick={()=> setSelectedImg(image.download_url+term)}
        >
            <img src={image.download_url+term} alt=""  className="photo object-cover mx-auto" />
            <div className="px-6 py-4">
                <div className="font-bold text-purple-500 text-xl mb-2 mx-auto"> photo by {image.author}</div>
            </div>
        </div>
    );
}

export default ImageCard