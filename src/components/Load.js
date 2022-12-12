import React from 'react'
import ProductContainer from '../screens/ProductContainer'

function Load() {
    const n = 8;
    return (
        <ProductContainer>
            <div className='py-8 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4'>
                {
                    [...Array(n)].map((e, i) =>(
                        <div key={i} className='animate-pulse flex flex-col'>
                            <div className='relative overflow-x-hidden mb-4 pt-[125%] bg-gray-200'>
                                <div className='absolute w-auto h-full top-0 left-1/2 -translate-x-1/2'></div>
                            </div>
                            <div className='h-2 bg-gray-200 w-full'></div>
                            <div className="h-2 bg-gray-200 mt-1 w-10"></div>
                        </div>
                    ))
                }
            </div>
        </ProductContainer>
    )
}

export default Load