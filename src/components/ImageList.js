import React from 'react';

const ImageList = (props) => {
    //Rendering each of image in the images object list
    const images = props.images.map((image) => {
        return <img key={image.id} alt={image.description} src={image.urls.regular}/>
    });

    return <div>{images}</div>
};

export default ImageList;