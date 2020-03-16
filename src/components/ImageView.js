import React from 'react';
import { Link } from 'react-router-dom';

const ImageView = (props) => {
    console.log(props.location.state.image)
    const { largeImageURL, user, pageURL } = props.location.state.image;
    return (
        <div className="imagae-page">
            <img src={largeImageURL} alt="pic" />
            <p>&copy;pixabay</p>
            <h4>Credit: {user}</h4>
            <h4>Download: <a target="_blank" href={pageURL}>GO TO DOWNLOAD</a></h4>
            <button><Link to="/">Home</Link></button>
        </div>
    )
}

export default ImageView; 
