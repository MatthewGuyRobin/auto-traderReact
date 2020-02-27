import React from 'react';

const Image = (props) => {
    return (
        <img className="imagesize" src={props.src} alt={props.alt} />
    )
}

export default Image;