import React from 'react'
import white from '../style/static/images/white.jpg';
import { Link, useParams } from 'react-router-dom';
import ProductContainer from './ProductContainer'
import ScreenContainer from './ScreenContainer';
import Layout from '../components/Layout';

function ProductListScreen() {
    const { id } = useParams();

    return (
        <Layout
            showFooter={true}
            showHeader={true} 
        >
            <ScreenContainer>
                <div className='text-center mb-8'>
                    <h1 className='text-gray-900 text-3xl font-extrabold capitalize'>{id}</h1>
                </div>
                <ProductContainer>
                    <div className='relative flex flex-row-reverse items-center justify-between border-t border-b border-gray-300 min-h-[48px] min-w-[80px]'>
                    </div>
                    <div className='py-4 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4'>
                        <div className='flex flex-col'>
                            <Link to='/product/outpost-canvas-jacket-tobacco'>
                            <div className='relative overflow-x-hidden mb-4 pt-[125%]'>
                                <img className='absolute w-auto h-full top-0 left-1/2 -translate-x-1/2' src={white} alt='product'></img>
                            </div>
                            <h3 className='text-xs text-left'>Outpost Canvas Jacket - Tobacco</h3>
                            <div className="text-xs text-gray-500 uppercase text-left font-thin pt-1">
                                <span>$180</span>
                            </div>
                            </Link>
                        </div>
                        <div className='flex flex-col'>
                            <Link to='bean/'>
                            <div className='relative overflow-x-hidden mb-4 pt-[125%]'>
                                <img className='absolute w-auto h-full top-0 left-1/2 -translate-x-1/2' src={white} alt='product'></img>
                            </div>
                            <h3 className='text-xs text-left'>Outpost Canvas Jacket - Tobacco</h3>
                            <div className="text-xs text-gray-500 uppercase text-left font-thin pt-1">
                                <span>$180</span>
                            </div>
                            </Link>
                        </div>
                        <div className='flex flex-col'>
                            <Link to='bean/'>
                            <div className='relative overflow-x-hidden mb-4 pt-[125%]'>
                                <img className='absolute w-auto h-full top-0 left-1/2 -translate-x-1/2' src={white} alt='product'></img>
                            </div>
                            <h3 className='text-xs text-left'>Outpost Canvas Jacket - Tobacco</h3>
                            <div className="text-xs text-gray-500 uppercase text-left font-thin pt-1">
                                <span>$180</span>
                            </div>
                            </Link>
                        </div>
                        <div className='flex flex-col'>
                            <Link to='bean/'>
                            <div className='relative overflow-x-hidden mb-4 pt-[125%]'>
                                <img className='absolute w-auto h-full top-0 left-1/2 -translate-x-1/2' src={white} alt='product'></img>
                            </div>
                            <h3 className='text-xs text-left'>Outpost Canvas Jacket - Tobacco</h3>
                            <div className="text-xs text-gray-500 uppercase text-left font-thin pt-1">
                                <span>$180</span>
                            </div>
                            </Link>
                        </div>
                    </div>
                </ProductContainer>
            </ScreenContainer>
        </Layout>
    )
}

export default ProductListScreen