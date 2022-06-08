import React from 'react';
import MakeupCard from './MakeupCard';
import '../styles/Makeup.css'

const Makeup = ({ makeup, addFavorite, favorites }) => {
    // console.log(makeup)
    const makeupCards = makeup.map(product => {
        // have an additional prop that says if this card is favorited or not (pass favorites down)
        let isFavorited = false;
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

export default Makeup