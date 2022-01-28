import React from "react";
import "../assets/styles.css";

const ImageFilter = ({ filterText}) => {
    //const [text, setText] = useState('');
    return (
      <div>
         <ul className="flex justify-center m-2">
        <li className="mr-1">
          <button onClick={() => {filterText("") } } className="inline-block border border-blue-500 rounded py-2 px-2 bg-blue-500 hover:bg-blue-700 text-white" >Normal</button>
        </li>
        <li className="mr-1">
          <button onClick={() => {filterText("?grayscale")} } className="inline-block border border-white rounded bg-gray-500 hover:border-gray-700 text-white hover:bg-gray-700 py-2 px-2">Grayscale</button>
        </li>
        </ul>
        <div className="flex flex-col justify-center space-y-2 p-2 w-94">
          <input type="range" className="w-full mx-auto" min="1" max="10" step="1" />
        </div>  
      </div>
    );
}

export default ImageFilter