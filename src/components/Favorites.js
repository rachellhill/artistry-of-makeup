import React from 'react';
import FavoriteCard from './FavoriteCard'
import '../styles/Favorites.css'

const Favorites = ({ favorites, removeFavorite }) => {
    console.log(favorites)

    const favoriteCards = favorites.map(favoriteProduct => {
        return (
            <FavoriteCard 
                name={favoriteProduct.name}
                brand={favoriteProduct.brand}
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