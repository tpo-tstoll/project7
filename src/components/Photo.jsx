import React from 'react';

const Photo = (props) => {
    const { src, alt } = props;
    
    return ( 
        <li>
        <img src={src} alt={alt} />
        </li>
     );
}
 
export default Photo;