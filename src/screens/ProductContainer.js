import React from 'react'

function ProductContainer({children}) {
    return (
        <div className="px-4 sm:px-6 lg:px-4 py-3 w-full xl:w-10/12 mx-auto">

            {children}

        </div>
    )
}

export default ProductContainer
