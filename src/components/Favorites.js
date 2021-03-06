import React from 'react';
import FavoriteCard from './FavoriteCard';
import PropTypes from 'prop-types';
import '../styles/Favorites.css';

const Favorites = ({ favorites, removeFavorite }) => {
    const favoriteCards = favorites.map(favoriteProduct => {
        return (
            <FavoriteCard 
                name={favoriteProduct.name}
                image={favoriteProduct.image}
                id={favoriteProduct.id}
                key={favoriteProduct.id}
                removeFavorite={removeFavorite}
            />
        )
    })
    return (
        <>
            {favorites.length === 0 ? <p className="no-favorites-message">Oh no! Looks like you haven't added any favorites 😭 Return home to add some!</p> : 
            <div className='favoritesCard-container'>{favoriteCards}</div>
            }
        </>
    )
}

export default Favorites;

Favorites.propTypes = {
    favorites: PropTypes.array.isRequired
}