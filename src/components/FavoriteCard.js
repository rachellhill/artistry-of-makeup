import React from 'react';
import '../styles/FavoriteCard.css'

const FavoriteCard = ({ name, brand, image, id }) => {
    // left off here, need to change classnames below since copied from makeup Card 
        // add same styling as makeupCard

    return (
            <div className='makeup-card'>
            <div className='product-image' src={image} style={{backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat", objectFit: "contain"}}>
            </div>
            <div className='favorite-container'>
                <h2>{name}</h2>
            </div>
        </div>
    )
}

export default FavoriteCard;