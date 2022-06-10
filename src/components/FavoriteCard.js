import React from 'react';
import '../styles/FavoriteCard.css'

const FavoriteCard = ({ name, brand, image, id, removeFavorite }) => {

    return (
        <div className='favorite-card'>
            <div className='favorite-product-image' src={image} style={{backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat", objectFit: "contain"}}>
                <h2 className='favorite-card-name'>{name}</h2>
            </div>
            <div className='favorite-container'>
                <button className="trash-btn" onClick={() => removeFavorite(id)}>🗑</button>
            </div>
        </div>
    )
}

export default FavoriteCard;