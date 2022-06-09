import React, { useState, useEffect } from 'react';
import Error from './Error'
import '../styles/MakeupDetails.css'

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
            console.log("product", product)
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
                <p>${product.price}</p>
                <p>{product.description}</p>
                <p><a href={product.website_link} target="_blank">Click here to purchase</a></p>
            </div>
            }
        </>
    )
}

export default MakeupDetails;