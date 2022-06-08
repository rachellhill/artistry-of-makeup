import React from 'react';
import '../styles/MakeupCard.css'

const MakeupCard = ({ name, brand, image }) => {
    return (
        <div className='makeup-card'>
            <div className='product-image' src={image} style={{backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat", objectFit: "contain"}}>
            </div>
            <h2>{name}</h2>
        </div>
    )
}

export default MakeupCard;