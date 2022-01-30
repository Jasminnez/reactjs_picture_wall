import React from "react";
import styled from 'styled-components';

const Styles = styled.div`
.box{
    background-color: rgb(255, 255, 255, 0.4);
}
.photo{
    max-height: 180px;
}
`;

const ImageCard = ({image, term, setSelectedImg}) => {

    return (
        <Styles>
            <div className="box max-w-sm rounded overflow-hidden shadow-lg py-2"
                onClick={()=> setSelectedImg(image.download_url+term)}
            >
                <img src={image.download_url+term} alt=""  className="photo object-cover mx-auto" />
                <div className="px-6 py-4">
                    <div className="font-bold text-zinc-400 text-xl mb-1 mx-auto"> photo by {image.author}</div>
                </div>
            </div>
        </Styles>
    );
}

export default ImageCard