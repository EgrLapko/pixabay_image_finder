import React from 'react';
import { Link } from 'react-router-dom';

const Image = ({ image }) => {
    const { tags, largeImageURL, id } = image;
    return (
        <div className="image-component">
            <div className="picture">
                <img src={largeImageURL} alt={tags}/>
            </div>
            <Link to= {{
                pathname: `/image/${id}`,
                state: { image }
            }}
            >
                <button className="btn">Open</button>
            </Link>
            
        </div>
    )
}

export default Image;
