import React from 'react';
import '../styles/FavoriteCard.css'

const FavoriteCard = ({ name, brand, image, id, removeFavorite }) => {

    return (
        <div className='favorite-card'>
            <div className='favorite-product-image' src={image} style={{backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat", objectFit: "contain"}}>
            </div>
            <div className='favorite-container'>
                <h2>{name}</h2>
                <button className="trash-btn" onClick={() => removeFavorite(id)}>🗑</button>
            </div>
        </div>
    )
}

export default FavoriteCard;