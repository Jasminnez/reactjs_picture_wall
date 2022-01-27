import React, { useState } from "react";

const ImageFilter = ({ filterText}) => {
    const [text, setText] = useState('');
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
        <br></br>
        {/* <div className="relative pt-1 mx-auto">
          <label for="blur_range" className="form-label">Blur effect</label><br />
          <input
            type="range"
            className="form-range appearance-none w-2/5 h-2 p-0 bg-gray-400 focus:outline-none focus:ring-0 focus:shadow-none mx-auto"
            min="0"
            max="5"
            step="1"
            id="blur_range"
          />
        </div> */}

      
        </div>
    );
}

export default ImageFilter