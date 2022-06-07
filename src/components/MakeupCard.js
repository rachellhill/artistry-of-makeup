import React from 'react';

const MakeupCard = ({ name, brand }) => {
    return (
        <div>
            <h2>{name}</h2>
            <h3>{brand}</h3>
        </div>
    )
}

export default MakeupCard;