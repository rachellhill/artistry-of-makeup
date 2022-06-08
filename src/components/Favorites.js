import React from 'react';
import FavoriteCard from './FavoriteCard'
import '../styles/Favorites.css'

const Favorites = ({ favorites }) => {
    console.log(favorites)

    const favoriteCards = favorites.map(favoriteProduct => {
        return (
            <FavoriteCard 
                name={favoriteProduct.name}
                brand={favoriteProduct.brand}
                image={favoriteProduct.image}
                id={favoriteProduct.id}
                key={favoriteProduct.id}
            />
        )
    })
    return (
        <div className='favoritesCard-container'>{favoriteCards}</div>
    )
}

export default Favorites;