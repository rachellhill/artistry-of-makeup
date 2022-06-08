import React from 'react';

const MakeupCard = ({ name, brand, image }) => {
    return (
        <>
            <div src={image} style={{backgroundImage: `url(${image})`}}>
                <h2>{name}</h2>
                <h3>{brand}</h3>
            </div>
        </>
    )
}

export default MakeupCard;