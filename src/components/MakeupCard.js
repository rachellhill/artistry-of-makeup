import React from 'react';
import '../styles/MakeupCard.css'
import filledHeart from '../assets/filled-heart.png';
import heart from '../assets/heart.png';
import { Link } from 'react-router-dom'


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
            <Link to={`/${id}`}>
                <div className='product-image' src={image} style={{backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat", objectFit: "contain"}}>
                <h2 className="makeip-card-name">{name}</h2>
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