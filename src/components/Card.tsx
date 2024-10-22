import Image from 'next/image'
import React, { useEffect } from 'react'

function Card({ product }: any) {
    console.log(product)
    return (
        <div className="container mt-4 mx-auto w-full">
            <div className="grid grid-cols-1">
                <div className="m-3 p-4 card m-2 cursor-pointer border border-gray-400 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200">
                    <div className="">
                        <div className='flex items-cnter justify-center w-full'>
                            <div className={`w-full h-[150px] bg-contain bg-no-repeat`} style={{ backgroundImage: `url(${product.image})` }}></div>
                            <span className="z-50 text-sm text-teal-800 font-mono bg-teal-100 inline rounded-full px-2 align-top float-right animate-pulse">+</span>
                        </div>
                        {product.title}
                        <p className="font-light font-mono text-sm text-gray-700 hover:text-gray-900 transition-all duration-200 line-clamp-3">
                            {product.description}
                        </p>
                    </div>
                    <div className='flex items-center justify-start gap-2'>
                        <p>price: </p>
                        <p className='font-bold'>{product.price}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card