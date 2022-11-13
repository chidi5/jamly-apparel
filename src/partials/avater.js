/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Transition } from '@headlessui/react';
import { useDispatch } from 'react-redux';
import { logout } from '../actions/user';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Avater()  {
    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logout())
    }

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center w-full">
          <span
            id="avatar"
            className="whitespace-nowrap text-sm font-thin text-gray-500 hover:text-gray-900 focus:text-gray-900"
          >
            Account
          </span>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-none shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">

            <div className="py-1">
                <Menu.Item>
                {({ active }) => (
                    <Link
                    to="/my/account"
                    className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                    )}
                    >
                    Account settings
                    </Link>
                )}
                </Menu.Item>
                <Menu.Item>
                {({ active }) => (
                    <Link
                    to="/my/profile"
                    className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                    )}
                    >
                    My Profile
                    </Link>
                )}
                </Menu.Item>
                <Menu.Item>
                {({ active }) => (
                    <Link
                    to="/my/account/listing"
                    className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                    )}
                    >
                    My Orders
                    </Link>
                )}
                </Menu.Item>
                <Menu.Item>
                    {({ active }) => (
                    <button
                        onClick={logoutHandler}
                        className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block w-full text-left px-4 py-2 text-sm'
                        )}
                    >
                        Sign out
                    </button>
                    )}
                </Menu.Item>
            </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default Avater;