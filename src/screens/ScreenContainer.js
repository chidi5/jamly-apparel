import React from 'react'

function ScreenContainer({children}) {
    return (
        <main>
            <div className="px-4 sm:px-6 lg:px-8 py-10 w-full mx-auto">

                {children}
                
            </div>
        </main>
    )
}

export default ScreenContainer
