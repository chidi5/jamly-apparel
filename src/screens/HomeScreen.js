import React from 'react'
import { Link } from 'react-router-dom';
import header from '../style/static/images/new.jpg';
import head from '../style/static/images/winter.jpg';
import one from '../style/static/images/1.jpeg';
import two from '../style/static/images/2.jpeg';
import three from '../style/static/images/3.jpeg';
import four from '../style/static/images/4.jpeg';
import ScreenContainer from './ScreenContainer';
import ProductContainer from './ProductContainer'

function HomeScreen() {
  return (
    <>
      <section>
        <div className='relative flex flex-col justify-center overflow-hidden'>
          <div className='inline-block'>
            {/* Image of 2000x800 */}
            <img src={header} className='hidden w-full lg:block' alt='shoes header' />            
            <img src={head} className='w-full lg:hidden' alt='shoes header' />
          </div>
          <div className='absolute flex justify-center top-0 bottom-0 left-0 right-0 items-center'>
            <div className='w-full max-w-7xl py-0 px-5 m-0 lg:my-0 lg:mx-auto lg:w-[90%]'>
              <div className='flex flex-col items-center justify-center mt-5 lg:mt-5 lg:flex-row'>
                <a href='/' className='btn w-full max-w-[175px] mb-4 lg:mb-0 lg:p-4 lg:mr-3'>Shop Men's</a>
                <a href='/' className='btn w-full max-w-[175px] lg:p-4 lg:mr-3'>Shop Women's</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ProductContainer>
          <section>
            <div className='mt-8'>
              <h1 className='text-gray-900 text-lg font-bold text-left'>New Arrivals</h1>
            </div>
            <div className='py-4 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4'>
              <div className='flex flex-col'>
                <Link to='/product/outpost-canvas-jacket-tobacco'>
                  <div className='relative overflow-x-hidden mb-4 pt-[125%]'>
                    <img className='absolute w-auto h-full top-0 left-1/2 -translate-x-1/2' src={one} alt='product'></img>
                  </div>
                  <h3 className='text-xs text-left'>Outpost Canvas Jacket - Tobacco</h3>
                  <div className="text-xs text-gray-500 uppercase text-left font-thin pt-1">
                    <span>$180</span>
                  </div>
                </Link>
              </div>
              <div className='flex flex-col'>
                <Link to='/product/outpost-canvas-jacket-tobacco'>
                  <div className='relative overflow-x-hidden mb-4 pt-[125%]'>
                    <img className='absolute w-auto h-full top-0 left-1/2 -translate-x-1/2' src={two} alt='product'></img>
                  </div>
                  <h3 className='text-xs text-left'>Outpost Canvas Jacket - Tobacco</h3>
                  <div className="text-xs text-gray-500 uppercase text-left font-thin pt-1">
                    <span>$180</span>
                  </div>
                </Link>
              </div>
              <div className='flex flex-col'>
                <Link to='/product/outpost-canvas-jacket-tobacco'>
                  <div className='relative overflow-x-hidden mb-4 pt-[125%]'>
                    <img className='absolute w-auto h-full top-0 left-1/2 -translate-x-1/2' src={three} alt='product'></img>
                  </div>
                  <h3 className='text-xs text-left'>Outpost Canvas Jacket - Tobacco</h3>
                  <div className="text-xs text-gray-500 uppercase text-left font-thin pt-1">
                    <span>$180</span>
                  </div>
                </Link>
              </div>
              <div className='flex flex-col'>
                <Link to='/product/outpost-canvas-jacket-tobacco'>
                  <div className='relative overflow-x-hidden mb-4 pt-[125%]'>
                    <img className='absolute w-auto h-full top-0 left-1/2 -translate-x-1/2' src={four} alt='product'></img>
                  </div>
                  <h3 className='text-xs text-left'>Outpost Canvas Jacket - Tobacco</h3>
                  <div className="text-xs text-gray-500 uppercase text-left font-thin pt-1">
                    <span>$180</span>
                  </div>
                </Link>
              </div>
            </div>
          </section>
      </ProductContainer>
    </>
  )
}

export default HomeScreen