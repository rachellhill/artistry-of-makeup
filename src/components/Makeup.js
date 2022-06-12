import React from 'react';
import MakeupCard from './MakeupCard';
import PropTypes from 'prop-types';
import '../styles/Makeup.css';

const Makeup = ({ makeup, addFavorite, removeFavorite, favorites }) => {

    const makeupCards = makeup.map(product => {
        let isFavorited = false
        favorites.forEach(favoritedProduct => {
            if (favoritedProduct.id === product.id) {
                isFavorited = true
            }
        })
        return (
            <MakeupCard 
                name={product.name}
                brand={product.brand}
                image={product.image_link}
                addFavorite={addFavorite}
                removeFavorite={removeFavorite}
                id={product.id}
                key={product.id}
                isFavorited={isFavorited}
            /> 
        )
    })

    return (
        <div className='makeupCard-container'>
            {makeupCards}
        </div>
    )
}

export default Makeup;

Makeup.propTypes = {
    makeup: PropTypes.array.isRequired,
    addFavorite: PropTypes.func.isRequired
}