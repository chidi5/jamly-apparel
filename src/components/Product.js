import React from 'react'
import { Link } from 'react-router-dom'

function Product({ product }) {

    return (
        <Link to={`/product/${product._id}`}>
            <div className='group relative overflow-hidden mb-4 pt-[125%]'>
            <img className='absolute w-full h-full top-1/2 left-0 -translate-y-1/2 object-center object-cover group-hover:scale-110 transition duration-200 ease-in-out' src={product.image1} alt={product.name}></img>
            </div>
            <h3 className='text-xs text-left'>{product.name}</h3>
            <div className="text-xs text-gray-500 uppercase text-left font-thin pt-1">
            <span>&#8358;{product.price}</span>
            </div>
        </Link>
    )
}

export default Product