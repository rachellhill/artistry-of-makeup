import React, { useState } from 'react';
import '../styles/MakeupCard.css'
import filledHeart from '../assets/filled-heart.png';
import heart from '../assets/heart.png';


const MakeupCard = ({ name, brand, image, id, addFavorite, removeFavorite, isFavorited }) => {
    // const [isFavorited, setIsFavorited] = useState(false)
    // if favorites is passed down, would not need line 8. data source is in app and tell this card if its favorited or not
  
    const addToFavorites = () => {
        if (!isFavorited) {
            isFavorited = true
            // setIsFavorited(true)
            const favoritedItem = {
                name: name,
                brand: brand,
                image: image, 
                id: id,
                isFavorited: isFavorited
            }
            addFavorite(favoritedItem)
        } else {
            // setIsFavorited(false)
            isFavorited = false
            removeFavorite(id)
        }
    }

    return (
        <div className='makeup-card'>
            <div className='product-image' src={image} style={{backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat", objectFit: "contain"}}>
            </div>
            <div className='favorite-container'>
                <h2>{name}</h2>
                  <button className="heart-btn" onClick={() => addToFavorites()}>
                    {isFavorited ? <img src={filledHeart} className="favorited-heart" alt='filled heart'></img> : <img src={heart} className="heart" alt='unfilled heart'></img>}
                </button>
            </div>
        </div>
    )
}

export default MakeupCard;