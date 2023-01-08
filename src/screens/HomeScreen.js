import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import header from '../style/static/images/new.jpg';
import head from '../style/static/images/winter.jpg';
import one from '../style/static/images/1.jpeg';
import two from '../style/static/images/2.jpeg';
import three from '../style/static/images/3.jpeg';
import four from '../style/static/images/4.jpeg';
import summer from '../style/static/images/sum.jpg';
import ProductContainer from './ProductContainer'
import { useDispatch, useSelector } from 'react-redux';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Loader from '../components/Loader';
import Product from '../components/Product';
import Load from '../components/Load';
import Layout from '../components/Layout';

function HomeScreen() {

  const dispatch = useDispatch()

  const storeFront = useSelector(state => state.storeFront)
  const { error, loading, store } = storeFront

  return (
    <Layout
      showFooter={true}
      showHeader={true} 
    >
    {loading ? <Load />
      : store &&
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
              <h1 className='text-gray-900 text-lg font-bold text-left'>Trending</h1>
            </div>
            <div className='py-4 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4'>
              {store.most_trending.map(trend => (
                <div key={trend._id} className='flex flex-col'>
                  <Product product={trend}/>
                </div>
              ))}
            </div>
            <div className='flex justify-center'>
              <button
                className="flex items-center justify-center px-4 py-2 my-5 text-sm font-light border border-transparent bg-gray-900 ring-1 ring-gray-900 text-white hover:scale-110 transition duration-200 ease-in-out">
                View all
              </button>
            </div>
          </section>

          <section className='overflow-hidden'>
              <div className='scroll_container flex my-8 gap-x-2 overflow-x-auto overflow-y-hidden snap-x'>
                {store.store_collections.map((collection) => (
                <div className='flex flex-col relative snap-start'>
                  <Link to={`/product/collection/${collection._id}`}>
                    <div className='group relative overflow-hidden lg:w-[269px] lg:h-[269px] md:w-[700px] md:h-[700px] w-[340px] h-[340px]'>
                      <img className='absolute w-full min-h-full top-1/2 left-0 -translate-y-1/2 object-center object-cover group-hover:scale-110 transition duration-300 ease-in-out' src={collection.image} alt={collection.name}></img>
                    </div>
                    <h3 className='flex text-base text-left font-semibold my-2'>
                      {collection.name}&nbsp;
                      <span className='flex justify-center items-center'>
                        <ArrowRightIcon className='w-5 h-5 pt-1' />
                      </span>
                    </h3>
                  </Link>
                </div>
                ))}
              </div>
          </section>
        </ProductContainer>
      </>
    }
    </Layout>
  )
}

export default HomeScreen