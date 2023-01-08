import { createRef, Fragment, useEffect, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon, FaceFrownIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../actions/cart'

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

export default function Cart({
    open,
    setOpen,
    addCart,
    qty,
    variation,
    id
}) {

    const myRef = useRef([]);

    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart

    if(cartItems.length !== 0){
        myRef.current = cartItems.map((element, i) => myRef.current[i] ?? createRef());
    }

    useEffect(() => {
        if(addCart) {
            if (id) {
                dispatch(addToCart(id, qty, variation))
                //console.log({id, qty, variation:variation})
                //let vItem = {b: {c:'bread'}}
                //console.log(Object.assign(variation, vItem));
                
            }
        }

    }, [dispatch, addCart, id, qty, variation])

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }

    const decrement= (i, product) => {
        //e.preventDefault()
        myRef.current[i].current.value--
        if(myRef.current[i].current.value < 1) {
            myRef.current[i].current.value = 1
        }
        dispatch(addToCart(product, Number(myRef.current[i].current.value), variation))
    }

    const increment= (i, product) => {
        //e.preventDefault()
        myRef.current[i].current.value++
        let max = myRef.current[i].current.max
        if(myRef.current[i].current.value > Number(max)) {
            myRef.current[i].current.value = Number(max)
        }
        dispatch(addToCart(product, Number(myRef.current[i].current.value), variation))
    }

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setOpen}>
                <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-500"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-500"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                        <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                                            <div className="flex items-start justify-between">
                                                <Dialog.Title className="text-lg font-light text-gray-900">Shopping cart</Dialog.Title>
                                                <div className="ml-3 flex h-7 items-center">
                                                    <button
                                                        type="button"
                                                        className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                                                        onClick={() => setOpen(!open)}
                                                    >
                                                        <span className="sr-only">Close panel</span>
                                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="mt-8">
                                                <div className="flow-root">
                                                {cartItems.length === 0
                                                    ?
                                                    (
                                                    <div className='flex flex-col pt-40 md:pt-36 items-center justify-center'>
                                                        <FaceFrownIcon className=' w-16 h-16 text-gray-400'/>
                                                        <p className='font-medium text-xl text-gray-400'>Cart is empty</p>
                                                    </div>
                                                    )
                                                    :
                                                    <ul className="-my-6 divide-y divide-gray-200">
                                                        {cartItems.map((item, i) => (
                                                        <li key={item.product} className="flex py-6">
                                                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                                <img
                                                                    src={item.image}
                                                                    alt={item.name}
                                                                    className="h-full w-full object-cover object-center"
                                                                />
                                                            </div>

                                                            <div className="ml-4 flex flex-1 flex-col">
                                                                <div>
                                                                    <div className="flex justify-between text-sm font-light text-gray-900">
                                                                        <h3>
                                                                            <Link to={`/product/${item.product}`}>{item.name}</Link>
                                                                        </h3>
                                                                        <p className="ml-4">{item.price}</p>
                                                                    </div>
                                                                    {Object.entries(item.variation).map(([key, val]) =>
                                                                        <p key={key} className="mt-1 text-xs text-gray-500">{key}: {val}</p>
                                                                    )}
                                                                </div>
                                                                <div className="flex flex-1 items-end justify-between text-xs">
                                                                    <div className='inline-flex items-center'>
                                                                    <p className="text-gray-500 inline-flex">Qty</p>
                                                                    <div className="flex-row inline-flex h-10 w-1/2 relative mt-1 ml-2 border border-gray-900">
                                                                        <button data-action="decrement" onClick={() => decrement(i, item.product)} className="bg-gray-100 text-gray-800 hover:bg-gray-200 h-full w-20 cursor-pointer outline-none focus:outline-none">
                                                                            <span className="text-lg m-auto font-bold">&mdash;</span>
                                                                        </button>
                                                                        <input 
                                                                            type="number"
                                                                            className="flex items-center justify-center text-gray-900 outline-none focus:outline-none text-center w-full bg-transparent font-thin text-xs"
                                                                            name="custom-input-number"
                                                                            min='1'
                                                                            max={item.num_products} 
                                                                            value={item.qty}
                                                                            ref={myRef.current[i]}
                                                                            onChange={(e) => dispatch(addToCart(item.product, Number(myRef.current[i].current.value)))}
                                                                        />
                                                                        <button data-action="increment" onClick={() => increment(i, item.product)} className="bg-gray-100 text-gray-800 hover:bg-gray-200 h-full w-20 cursor-pointer focus:outline-none">
                                                                            <span className="text-lg text-center m-auto font-bold">&#xff0b;</span>
                                                                        </button>
                                                                    </div>
                                                                    </div>

                                                                    <div className="flex">
                                                                    <button
                                                                        type="button"
                                                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                                                        onClick={() => removeFromCartHandler(item.product)}
                                                                    >
                                                                        Remove
                                                                    </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        ))}
                                                    </ul>
                                                }
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                                            <div className="flex justify-between text-base font-medium text-gray-900">
                                                <p>Subtotal</p>
                                                <p>&#8358;{cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}</p>
                                            </div>
                                            <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                                            <div className="mt-6">
                                                <Link
                                                to="/checkout"
                                                className="flex w-full items-center justify-center px-4 py-3 my-5 text-sm font-light border border-transparent bg-gray-900 ring-1 ring-gray-900 text-white hover:bg-gray-800"
                                                >
                                                Checkout
                                                </Link>
                                            </div>
                                            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                                <p>
                                                or
                                                <button
                                                    type="button"
                                                    className="font-medium text-gray-900 hover:text-text-800"
                                                    onClick={() => setOpen(false)}
                                                >
                                                    &nbsp;Continue Shopping
                                                    <span aria-hidden="true"> &rarr;</span>
                                                </button>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
