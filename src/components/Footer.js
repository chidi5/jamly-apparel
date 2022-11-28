import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='flex bottom-0 left-0 w-full'>
      <footer className='bg-primary-100 w-full pt-8'>
        <div className='flex w-full m-auto py-0 flex-col px-4 sm:px-6 lg:px-8 lg:flex-row lg:justify-between'>
          <div className='w-full lg:w-[30%]'>
            <div className='mb-5 flex justify-center md:justify-start'>
              <Link to="/">
                <span className="sr-only">21 Bespoke</span>
                  <img
                    className="w-auto h-14"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="store name"
                  />
              </Link>
            </div>
          </div>
          <div className='w-full lg:w-[35%]'>
            <div className='mb-5 text-left'>
              <h2 className=" text-[13px] mb-[10px] font-semibold">10% Off Your First Order</h2>
              <div className="text-[11px] mt-0 text-gray-500 font-light">
                <p>Subscribe to our mailing list for 10% off your first order.</p>
              </div>
            </div>
            <div className='mb-5 text-left'>
              <h2 className=" text-[13px] mb-[10px] font-semibold">30 Days Return</h2>
              <div className="text-[11px] mt-0 text-gray-500 font-light">
                <p>Shop with certainty with our 30 day returns policy..</p>
              </div>
            </div>
            <div className='mb-5 text-left'>
              <h2 className=" text-[13px] mb-[10px] font-semibold">Worldwide Shipping</h2>
              <div className="text-[11px] mt-0 text-gray-500 font-light">
                <p>Free worldwide shipping on all orders over $95.</p>
              </div>
            </div>
          </div>
          <div className='flex w-full mt-12 lg:mt-0 lg:w-1/5 lg:justify-between'>
            <div className='w-1/2 pr-4 lg:pr-0 text-left'>
              <h2 className=" text-[13px] mb-[10px] font-semibold text-left">Socials</h2>
              <p>
                <a href="/" className='text-[11px] mt-0 text-gray-500 font-light text-left'>Facebook</a>
              </p>
              <p>
                <a href="/" className='text-[11px] mt-0 text-gray-500 font-light text-left'>Instagram</a>
              </p>
              <p>
                <a href="/" className='text-[11px] mt-0 text-gray-500 font-light text-left'>YouTube</a>
              </p>
              <p>
                <a href="/" className='text-[11px] mt-0 text-gray-500 font-light text-left'>Twitter</a>
              </p>
            </div>
            <div className='w-1/2 pl-4 lg:pl-0 text-left'>
              <h2 className=" text-[13px] mb-[10px] font-semibold text-left">Info</h2>
              <p>
                <a href="/" className='text-[13px] mt-0 text-gray-500 font-light text-left'>Facebook</a>
              </p>
              <p>
                <a href="/" className='text-[13px] mt-0 text-gray-500 font-light text-left'>Instagram</a>
              </p>
              <p>
                <a href="/" className='text-[13px] mt-0 text-gray-500 font-light text-left'>YouTube</a>
              </p>
              <p>
                <a href="/" className='text-[13px] mt-0 text-gray-500 font-light text-left'>Twitter</a>
              </p>
            </div>
          </div>
        </div>
        <div className='flex items-end mt-10 text-[11px] py-4 px-4 sm:px-6 lg:px-8 lg:justify-between bg-gray-300'>
          <div className="text-[11px] mt-0 text-gray-900 font-[50]">
            <p>
              <a href="/">Site by Jamly.</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer