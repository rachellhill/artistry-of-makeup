import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Error from './Error';
import '../styles/MakeupDetails.css';

const MakeupDetails = ({ id }) => {
    const [product, setProduct] = useState({})
    const [isError, setIsError] = useState(false)

    const fetchProduct = async () => {
        const url = `https://makeup-api.herokuapp.com/api/v1/products/${id}.json`
        setIsError(false)
        try {
            const response = await fetch(url)
            const product = await response.json()
            setProduct(product)
        } catch(error) {
            setIsError(true)
        }
    }

    useEffect(() => {
        fetchProduct()
    }, [])    

    return (
        <>
            {isError ? <Error /> : 
             <div className="makeup-details-container">
                <h1 className='makeup-details-header'>{product.name}</h1>
                <div className='makeup-details-img' src={product.image_link} style={{backgroundImage: `url(${product.image_link})`, backgroundRepeat: "no-repeat", objectFit: "contain"}}>
                    <h2 className='makeup-details-brand'>{product.brand}</h2>
                </div>
                <p className='makeup-details-price'>${product.price}</p>
                <p className='makeup-details-description'>{product.description}</p>
                <p className='makeup-details-website'><a href={product.website_link} target="_blank">Purchase</a></p>
            </div>
            }
        </>
    )
}

export default MakeupDetails;

MakeupDetails.propTypes = {
    id: PropTypes.number.isRequired
}