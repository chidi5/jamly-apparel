/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Fragment, useEffect, useState} from 'react'
import { Popover, Transition, Disclosure } from '@headlessui/react'
import {
  Bars3BottomLeftIcon,
  HomeModernIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  Squares2X2Icon,
  UserIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import logo from '../style/static/images/logo.png';
import { Link, useNavigate } from 'react-router-dom'
import Cart from '../partials/cart'
import Avater from '../partials/avater'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/user'
import { loadStore } from '../actions/storefront'
import { STORE_FAIL } from '../actions/types';

function Header() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // window.location.href
    //const [domain, setDomain] = useState('https://jamrel.netlify.app/');
    const domain = 'https://jamrel.netlify.app/'

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart

    const storeFront = useSelector(state => state.storeFront)
    const { loading, store } = storeFront

    const logoutHandler = () => {
        dispatch(logout())
    }

    useEffect(() => {
        // if store not found
        //if({ type: STORE_FAIL }) {
            //navigate('/checkout')
            //console.log("haha")
        //}
        dispatch(loadStore(domain))
        //if (store === undefined) {
            //navigate('/checkout')
        //}
    }, [dispatch, navigate])

    return (
        <>
        <Popover className="sticky top-0 z-10 bg-white border border-primary-100">
            <div className="mx-auto max-w-[84rem] px-4 sm:px-6">
                <div className="flex items-center justify-between border-0 py-1">
                    <Popover.Group as="nav" className="hidden space-x-8 lg:flex lg:justify-start">
                        <div className="text-sm font-thin text-gray-500">
                        </div>
                        <div className="text-sm font-thin text-gray-500">
                        </div>
                        <div className="text-sm font-thin text-gray-500">
                        </div>
                    </Popover.Group>
                    
                    <div className="-my-2 -mr-2 lg:hidden">
                        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-900 hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-0">
                            <span className="sr-only">Open menu</span>
                            <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                    </div>

                    <div className="flex items-center justify-center">
                        <Link to="/">
                            <span className="sr-only">21 Bespoke</span>
                            <img
                                className="h-20 w-auto lg:h-20"
                                src={logo}
                                alt="store name"
                            />
                        </Link>
                    </div>

                    <div className="-my-2 -mr-2 lg:hidden">
                        <button 
                            onClick={() => setOpen(!open)}
                            className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-900 hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-0"
                        >
                            <span className="sr-only">Cart menu</span>
                            <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                            {cartItems.length ?
                                <div className='notification-dot'></div>
                                : null
                            }
                        </button>
                    </div>

                    <div className="hidden items-center justify-end space-x-8 lg:flex">
                        <a href="#" className="whitespace-nowrap text-sm font-thin text-gray-500 hover:text-gray-900">
                            Search
                        </a>
                        {userInfo ?
                            <Avater />
                            :
                            <Link to="/login" className="whitespace-nowrap text-sm font-thin text-gray-500 hover:text-gray-900">
                                Login
                            </Link>
                        }
                        <button
                            className="whitespace-nowrap text-sm font-thin text-gray-500 hover:text-gray-900"
                            onClick={() => setOpen(!open)}
                        >
                            Cart ({cartItems.length})
                        </button>
                        <Cart open={open} setOpen={setOpen} />
                    </div>
                </div>
            </div>

            <Transition
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel focus className="relative inset-x-0 -top-20 origin-top-right transform p-0 transition z-10 overflow-auto h-full lg:hidden">
                    <div className="divide-y-2 divide-gray-50 bg-white ring-1 ring-black ring-opacity-5">
                        <div className="px-5 pt-5 pb-6">
                            <div className="flex items-center justify-between">
                                <div className="-mr-2">
                                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-900 hover:bg-transparent hover:text-gray-900 focus:outline-none focus:ring-0 focus:ring-inset">
                                        <span className="sr-only">Close menu</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </Popover.Button>
                                </div>
                                <div>
                                    <img
                                        className="h-16 w-auto"
                                        src={logo}
                                        alt="21 bespoke"
                                    />
                                </div>
                            </div>
                            <div className="mt-6">
                                <nav className="grid gap-y-8">
                                    <Link
                                        to='/'
                                        className="-m-3 flex items-center rounded-none p-3 hover:bg-gray-50"
                                        >
                                        <HomeModernIcon className="h-6 w-6 flex-shrink-0 text-gray-600" aria-hidden="true" />
                                        <span className="ml-3 text-base font-medium text-gray-900">Home</span>
                                    </Link>
                                    <Link
                                        to='/product/all'
                                        className="-m-3 flex items-center rounded-none p-3 hover:bg-gray-50"
                                        >
                                        <ShoppingBagIcon className="h-6 w-6 flex-shrink-0 text-gray-600" aria-hidden="true" />
                                        <span className="ml-3 text-base font-medium text-gray-900">Shop Now</span>
                                    </Link>
                                    <Disclosure>
                                    {({ open }) => (
                                        <>
                                        <Disclosure.Button className="flex w-full -m-3 items-center justify-between rounded-none p-3 hover:bg-gray-50 text-left focus:outline-none">
                                            <span className="text-base font-medium text-gray-900 flex flex-row">
                                                <Squares2X2Icon className="h-6 w-6 flex-shrink-0 text-gray-600 mr-3" aria-hidden="true" />
                                                Collections
                                            </span>
                                            <ChevronUpIcon
                                            className={`${
                                                open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-gray-600`}
                                            />
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-800 bg-gray-50">
                                            <nav className="grid gap-y-8">
                                                {store && 
                                                    <>
                                                    {store.store_collections.map((collection) => 
                                                        <Link to={`/product/collection/${collection._id}?name=${collection.name}`} className="-m-3 flex items-center rounded-none p-3 hover:bg-gray-100">
                                                            <span className="ml-3 text-base font-medium text-gray-900">{collection.name}</span>
                                                        </Link>
                                                    )}
                                                    </>
                                                }
                                            </nav>
                                        </Disclosure.Panel>
                                        </>
                                    )}
                                    </Disclosure>
                                    {userInfo &&
                                        <Disclosure>
                                        {({ open }) => (
                                            <>
                                            <Disclosure.Button className="flex w-full -m-3 items-center justify-between rounded-none p-3 hover:bg-gray-50 text-left focus:outline-none">
                                                <span className="text-base font-medium text-gray-900 flex flex-row">
                                                    <UserIcon className="h-6 w-6 flex-shrink-0 text-gray-600 mr-3" aria-hidden="true" />
                                                    Account
                                                </span>
                                                <ChevronUpIcon
                                                className={`${
                                                    open ? 'rotate-180 transform' : ''
                                                } h-5 w-5 text-gray-600`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-800 bg-gray-50">
                                                <nav className="grid gap-y-8">
                                                    <Link
                                                        to='/'
                                                        className="-m-3 flex items-center rounded-none p-3 hover:bg-gray-100"
                                                        >
                                                        <span className="ml-3 text-base font-medium text-gray-900">Account Settings</span>
                                                    </Link>
                                                    <Link
                                                        to='/'
                                                        className="-m-3 flex items-center rounded-none p-3 hover:bg-gray-100"
                                                        >
                                                        <span className="ml-3 text-base font-medium text-gray-900">My Profile</span>
                                                    </Link>
                                                    <Link
                                                        to='/'
                                                        className="-m-3 flex items-center rounded-none p-3 hover:bg-gray-100"
                                                        >
                                                        <span className="ml-3 text-base font-medium text-gray-900">My Orders</span>
                                                    </Link>
                                                </nav>
                                            </Disclosure.Panel>
                                            </>
                                        )}
                                        </Disclosure>
                                    }
                                </nav>
                            </div>
                        </div>
                        <div className="space-y-6 py-6 px-5">
                            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                <Link to="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                    Returns Policy
                                </Link>

                                <Link to="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                    Terms & Conditions
                                </Link>
                            </div>
                            {userInfo ?
                                <div className='flex items-center justify-center'>
                                    <Popover.Button
                                        onClick={logoutHandler}
                                        className="flex items-center justify-center px-4 py-2 my-5 text-sm font-light border border-transparent bg-gray-900 ring-1 ring-gray-900 text-white hover:bg-gray-800">
                                            Sign out
                                    </Popover.Button>
                                </div>
                                :
                                <div>
                                    <Popover.Button
                                    onClick={() => navigate("/register")}
                                    className="flex w-full items-center justify-center border border-transparent bg-transparent ring-1 ring-gray-900 px-4 py-2 text-base font-light text-gray-900 hover:bg-gray-900 hover:text-white hover:ring-gray-900"
                                    >
                                        Sign up
                                    </Popover.Button>
                                    <p className="mt-6 text-center text-base font-medium text-gray-500">
                                    Existing customer?{' '}
                                    <Popover.Button
                                    onClick={() => navigate("/login")}
                                    className="text-gray-900 hover:text-gray-800">
                                        Sign in
                                    </Popover.Button>
                                    </p>
                                </div>
                            }
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>

        <Popover className="hidden relative w-full bg-primary-100 lg:block">
            <div className="mx-auto max-w-[84rem] px-4 sm:px-6">
                <div className="flex items-center justify-between border-0 py-2.5">
                    <Popover.Group as="nav" className="hidden space-x-6 lg:flex lg:justify-start">
                        <Link to="/product/all" className="text-sm font-thin text-gray-500 hover:text-gray-900">
                            Shop Now
                        </Link>
                        {store && 
                            <>
                            {store.store_categories.map((cat) => 
                                <Link to={`/${cat._id}?name=${cat.name}`} className="text-sm font-thin text-gray-500 hover:text-gray-900">
                                    {cat.name}
                                </Link>
                            )}
                            </>
                        }
                        <Link to="/sales" className="text-sm font-thin text-red-500 hover:text-red-900">
                            Sales
                        </Link>
                    </Popover.Group>
                </div>
            </div>
        </Popover>
        </>
    )
}

export default Header