import React from 'react';
import Image from './Image';

export const ImageList = (props) => {
    const { images } = props;
    return (
        <div className="image-list-container">
            {
                images.length > 0 &&
                images.map((image) => 
                    <Image 
                        key={image.id}
                        image={image}
                    />
                )
            }
        </div>
    )
}
