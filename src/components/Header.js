/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Fragment, useState} from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3BottomLeftIcon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  ShieldCheckIcon,
  ShoppingCartIcon,
  Squares2X2Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import Cart from '../partials/cart'

function Header() {

    const solutions = [
        {
          name: 'Analytics',
          description: 'Get a better understanding of where your traffic is coming from.',
          href: '#',
          icon: ChartBarIcon,
        },
        {
          name: 'Engagement',
          description: 'Speak directly to your customers in a more meaningful way.',
          href: '#',
          icon: CursorArrowRaysIcon,
        },
        { name: 'Security', description: "Your customers' data will be safe and secure.", href: '#', icon: ShieldCheckIcon },
        {
          name: 'Integrations',
          description: "Connect with third-party tools that you're already using.",
          href: '#',
          icon: Squares2X2Icon,
        },
        {
          name: 'Automations',
          description: 'Build strategic funnels that will drive your customers to convert',
          href: '#',
          icon: ArrowPathIcon,
        },
    ]
    const resources = [
        {
          name: 'Help Center',
          description: 'Get all of your questions answered in our forums or contact support.',
          href: '#',
          icon: LifebuoyIcon,
        },
        {
          name: 'Guides',
          description: 'Learn how to maximize our platform to get the most out of it.',
          href: '#',
          icon: BookmarkSquareIcon,
        },
        {
          name: 'Events',
          description: 'See what meet-ups and other events we might be planning near you.',
          href: '#',
          icon: CalendarIcon,
        },
        { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon },
    ]

    const [open, setOpen] = useState(false);

    return (
        <>
        <Popover className="sticky top-0 z-10 bg-white border border-primary-100">
            <div className="mx-auto max-w-[84rem] px-4 sm:px-6">
                <div className="flex items-center justify-between border-0 py-4">
                    <Popover.Group as="nav" className="hidden space-x-8 lg:flex lg:justify-start">
                        <a href="#" className="text-sm font-thin text-gray-500 hover:text-gray-900">
                            Men
                        </a>
                        <a href="#" className="text-sm font-thin text-gray-500 hover:text-gray-900">
                            Women
                        </a>
                    </Popover.Group>
                    
                    <div className="-my-2 -mr-2 lg:hidden">
                        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-900 hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-0">
                            <span className="sr-only">Open menu</span>
                            <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                    </div>

                    <div className="flex items-center justify-center">
                        <Link to="/">
                            <span className="sr-only">DerekMano</span>
                            <img
                                className="h-8 w-auto sm:h-10"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
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
                        </button>
                    </div>

                    <div className="hidden items-center justify-end space-x-8 lg:flex">
                        <a href="#" className="whitespace-nowrap text-sm font-thin text-gray-500 hover:text-gray-900">
                            Search
                        </a>
                        <Link to="/login" className="whitespace-nowrap text-sm font-thin text-gray-500 hover:text-gray-900">
                            Account
                        </Link>
                        <a href="#"
                            className="whitespace-nowrap text-sm font-thin text-gray-500 hover:text-gray-900"
                            onClick={() => setOpen(!open)}
                        >
                            Cart (0)
                        </a>
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
                <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition z-10 lg:hidden">
                    <div className="divide-y-2 divide-gray-50 bg-white shadow-lg ring-1 ring-black ring-opacity-5">
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
                                        className="h-8 w-auto"
                                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                        alt="Your Company"
                                    />
                                </div>
                            </div>
                            <div className="mt-6">
                                <nav className="grid gap-y-8">
                                {solutions.map((item) => (
                                    <a
                                    key={item.name}
                                    href={item.href}
                                    className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                                    >
                                    <item.icon className="h-6 w-6 flex-shrink-0 text-indigo-600" aria-hidden="true" />
                                    <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                                    </a>
                                ))}
                                </nav>
                            </div>
                        </div>
                        <div className="space-y-6 py-6 px-5">
                            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                Pricing
                                </a>

                                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                Docs
                                </a>
                                {resources.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                                >
                                    {item.name}
                                </a>
                                ))}
                            </div>
                            <div>
                                <Link to="/register"
                                className="flex w-full items-center justify-center border border-transparent bg-transparent ring-1 ring-gray-900 px-4 py-2 text-base font-light text-gray-900 hover:bg-gray-900 hover:text-white hover:ring-gray-900"
                                >
                                    Sign up
                                </Link>
                                <p className="mt-6 text-center text-base font-medium text-gray-500">
                                Existing customer?{' '}
                                <Link to="/login" className="text-indigo-600 hover:text-indigo-500">
                                    Sign in
                                </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
        <Popover className="hidden relative w-full bg-primary-100 lg:block">
            <div className="mx-auto max-w-[84rem] px-4 sm:px-6">
                <div className="flex items-center justify-between border-0 py-2.5">
                    <Popover.Group as="nav" className="hidden space-x-6 lg:flex lg:justify-start">
                        <Link to="/t-shirt" className="text-sm font-thin text-gray-500 hover:text-gray-900">
                            T-shirt
                        </Link>
                        <Link to="/boot" className="text-sm font-thin text-gray-500 hover:text-gray-900">
                            Boots
                        </Link>
                        <Link to="/sandal" className="text-sm font-thin text-gray-500 hover:text-gray-900">
                            Sandals
                        </Link>
                        <Link to="/shoe" className="text-sm font-thin text-gray-500 hover:text-gray-900">
                            Shoes
                        </Link>
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