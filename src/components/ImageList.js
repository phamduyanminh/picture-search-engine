import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard'

const ImageList = (props) => {
    //Rendering each of image in the images object list
    const images = props.images.map((image) => {
        return <ImageCard key={image.id} image={image}/>
    });

    return <div className="image-list">{images}</div>
};

export default ImageList;