import React, { useState, useEffect } from 'react';

const MakeupDetails = ({ id }) => {
    console.log(id)
    const [product, setProduct] = useState({})
    const [error, setError] = useState('')

    const fetchProduct = async () => {
        const url = `https://makeup-api.herokuapp.com/api/v1/products/${id}.json`

        try {
            const response = await fetch(url)
            const product = await response.json()
            setProduct(product)
            console.log("product", product)
        } catch(error) {
            setError(error.message)
        }
    }

    useEffect(() => {
        fetchProduct()
    }, [])    

    return (
        <div>makeup details</div>
    )
}

export default MakeupDetails;