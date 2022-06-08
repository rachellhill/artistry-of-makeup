import React from 'react';
import MakeupCard from './MakeupCard';
import '../styles/Makeup.css'

const Makeup = ({ makeup, addFavorite }) => {
    // console.log(makeup)
    const makeupCards = makeup.map(product => {
        return (
                <MakeupCard 
                    name={product.name}
                    brand={product.brand}
                    image={product.image_link}
                    addFavorite={addFavorite}
                    id={product.id}
                    key={product.id}
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