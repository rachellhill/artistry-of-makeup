import React from 'react';
import '../styles/MakeupCard.css'
import filledHeart from '../assets/filled-heart.png';
import heart from '../assets/heart.png';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'


const MakeupCard = ({ name, brand, image, id, addFavorite, removeFavorite, isFavorited }) => {
    const addToFavorites = () => {
        if (!isFavorited) {
            isFavorited = true
            const favoritedItem = {
                name: name,
                brand: brand,
                image: image, 
                id: id,
                isFavorited: isFavorited
            }
            addFavorite(favoritedItem)
        } else {
            isFavorited = false
            removeFavorite(id)
        }
    }

    return (
        <div className='makeup-card'>
            <Link to={`/${id}`} style={{textDecoration: 'none', color: 'black'}}>
                <div className='product-image' src={image} style={{backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat", objectFit: "contain"}}>
                <h2 className="makeup-card-name">{name}</h2>
                </div>
            </Link>
            <div className='favorite-container'>
                <button className="heart-btn" onClick={() => addToFavorites()}>
                    {isFavorited ? <img src={filledHeart} className="favorited-heart" alt='filled heart'></img> : <img src={heart} className="heart" alt='unfilled heart'></img>}
                </button>
            </div>
        </div>
    )
}

export default MakeupCard;

MakeupCard.propTypes = {
    name: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    addFavorite: PropTypes.func
}