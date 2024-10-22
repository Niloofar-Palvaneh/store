import React, { useEffect, useState } from 'react'
import Card from './Card'

function CardsWrapper() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))
    }, [])
    console.log(products);

    return (
        <div>
            <div>
                <h1>my shop</h1>
                <p>basket icon</p>
            </div>
            <div className='grid grid-cols-3'>
                {
                    products && products.map(product => <Card product={product} />)
                }
            </div>
        </div>
    )
}

export default CardsWrapper