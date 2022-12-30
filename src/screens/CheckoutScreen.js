import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'

function CheckoutScreen() {

  const products = [
    {
      id: 1,
      name: 'Throwback Hip Bag',
      href: '#',
      color: 'Salmon',
      price: '$90.00',
      quantity: 1,
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
      imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
    },
    {
      id: 2,
      name: 'Medium Stuff Satchel',
      href: '#',
      color: 'Blue',
      price: '$32.00',
      quantity: 1,
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
      imageAlt:
        'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
    },
    {
      id: 3,
      name: 'Throwback Hip Bag',
      href: '#',
      color: 'Salmon',
      price: '$90.00',
      quantity: 1,
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
      imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
    },
    {
      id: 4,
      name: 'Medium Stuff Satchel',
      href: '#',
      color: 'Blue',
      price: '$32.00',
      quantity: 1,
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
      imageAlt:
        'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
    },
    // More products...
  ]

  return (
    <Layout
      showFooter={false}
      showHeader={false}
    >
      <div className='py-16'>
        <div className="wrap flex flex-auto">
          <div className='grid lg:grid-cols-2 first:columns-2'>
            <div className='lg:order-last'>
              <div className='py-8 lg:py-12 lg:px-10 lg:mx-auto'>
                <div className="pointer-events-none flex justify-center items-center">
                  <>
                    <div className="pointer-events-auto w-full">
                      <div className="flex max-h-[30rem] flex-col bg-gray-100">
                        <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                          <div className="mt-8">
                            <div className="flow-root">
                              <ul className="-my-6 divide-y divide-gray-200">
                                {products.map((product) => (
                                <li key={product.id} className="flex py-6">
                                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <img
                                      src={product.imageSrc}
                                      alt={product.imageAlt}
                                      className="h-full w-full object-cover object-center"
                                    />
                                  </div>
                                  <div className="ml-4 flex flex-1 flex-col">
                                    <div>
                                      <div className="flex justify-between text-sm font-light text-gray-900">
                                        <h3>
                                          <a href={product.href}>{product.name}</a>
                                        </h3>
                                        <p className="ml-4">{product.price}</p>
                                      </div>
                                      <p className="mt-1 text-xs text-gray-800 text-left">Color: {product.color}</p>
                                      <p className="mt-1 text-xs text-gray-800 text-left">Size: M</p>
                                    </div>
                                    <div className="flex flex-1 items-end justify-between text-xs">
                                      <p className="text-gray-800">Qty {product.quantity}</p>
                                      <div className="flex">
                                        <button
                                          type="button"
                                          className="font-medium text-indigo-600 hover:text-indigo-500"
                                        >
                                          Remove
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="border-t border-gray-300 py-6 px-4 sm:px-6">
                          <div className="flex justify-between text-sm font-thin text-gray-700">
                            <p>Subtotal</p>
                            <p>$262.00</p>
                          </div>
                          <div className="flex justify-between my-4 text-sm font-thin text-gray-700">
                            <p>Shipping</p>
                            <p>Calculated at next step</p>
                          </div>
                          <div className="flex justify-between text-sm font-mediedium text-gray-900">
                            <p>Total</p>
                            <p>$262.00</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                </div>

              </div>
            </div>
            <div>
              <form className='md:py-14 lg:py-12 lg:mx-auto'>
                <h3 className='text-gray-500 text-left text-xl font-mededium pb-3'>Shipping Address</h3>
                <div className='flex flex-col'>
                  <input 
                    type="email"
                    id="email"
                    className='text-sm text-gray-700 px-4 py-4 w-full my-2 rounded-none border border-gray-900 focus:outline-0'
                    placeholder="Email"
                    required 
                  />
                  <div class="grid grid-cols-6 gap-3">
                    <div class="col-span-6 sm:col-span-3">
                      <input 
                        type="name"
                        id="first-name"
                        className='text-sm text-gray-700 px-4 py-4 w-full my-2 rounded-none border border-gray-900 focus:outline-0'
                        placeholder="First Name"
                        required 
                      />
                    </div>
                    <div class="col-span-6 sm:col-span-3">
                      <input 
                        type="name"
                        id="last-name"
                        className='text-sm text-gray-700 px-4 py-4 w-full my-2 rounded-none border border-gray-900 focus:outline-0'
                        placeholder="Last Name"
                        required 
                      />
                    </div>
                  </div>
                  <select
                    id="country"
                    name="country"
                    autocomplete="country-name"
                    className='text-sm text-gray-700 px-4 py-4 w-full my-2 rounded-none border border-gray-900 focus:outline-0'
                    placeholder="Country"
                    required
                  >
                    <option>Nigeria</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                  <input 
                    type="address"
                    id="address"
                    className='text-sm text-gray-700 px-4 py-4 w-full my-2 rounded-none border border-gray-900 focus:outline-0'
                    placeholder="Address"
                    required 
                  />
                  <div class="grid grid-cols-6 gap-3">
                    <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                      <input 
                        type="text"
                        name='city'
                        id="city"
                        className='text-sm text-gray-700 px-4 py-4 w-full my-2 rounded-none border border-gray-900 focus:outline-0'
                        placeholder="City"
                        required 
                      />
                    </div>
                    <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                      <input 
                        type="text"
                        name='state'
                        id="state"
                        className='text-sm text-gray-700 px-4 py-4 w-full my-2 rounded-none border border-gray-900 focus:outline-0'
                        placeholder="State"
                        required 
                      />
                    </div>
                    <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                      <input 
                        type="text"
                        name='postal-code'
                        id="postal-code"
                        className='text-sm text-gray-700 px-4 py-4 w-full my-2 rounded-none border border-gray-900 focus:outline-0'
                        placeholder="Zip Code"
                        required 
                      />
                    </div>
                  </div>
                  <input 
                    type="tel"
                    name='phone'
                    id="phone"
                    className='text-sm text-gray-700 px-4 py-4 w-full my-2 rounded-none border border-gray-900 focus:outline-0'
                    placeholder="Phone"
                    required 
                  />
                </div>
                <div className='flex flex-col lg:flex-row-reverse justify-between items-center mt-6'>
                  <button
                    className="flex items-center justify-center w-full lg:w-fit px-4 py-3 text-sm font-light bg-gray-900 text-white hover:bg-gray-800"
                  >
                    Continue to payment
                  </button>
                  <button
                    className="flex items-center justify-center w-full lg:w-fit px-4 py-3 my-4 text-sm font-light border border-gray-900 text-gray-900 hover:bg-gray-50"
                  >
                    Return to cart
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CheckoutScreen