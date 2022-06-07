import React from 'react';
import MakeupCard from './MakeupCard';

const Makeup = ({ makeup }) => {
    console.log(makeup)
    const makeupCards = makeup.map(product => {
     
        return (
            <div className='makeupCard-container' key={product.id}>
                <MakeupCard 
                    name={product.name}
                    brand={product.brand}
                /> 
            </div>
        )
    })
    return (
        <div>
            {makeupCards}
        </div>
    )
}

export default Makeup