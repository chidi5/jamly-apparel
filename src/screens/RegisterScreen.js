import React from 'react'
import home from '../style/static/images/ezgif.png';
import { Link } from 'react-router-dom'
import ScreenContainer from './ScreenContainer'

function RegisterScreen() {
  return (
    <div>
        <div className='grid lg:grid-cols-2'>
            <div className='bg-gray-50 hidden lg:flex lg:flex-col justify-center items-center text-center'>
                <ScreenContainer>
                    <div className='md:py-14 lg:py-12 lg:px-12'>
                        <h2 className='text-4xl font-bold'>JOIN US AND BE PART OF THE LOYALTY DEPT.</h2>
                        <p className='py-3 italic font-thin'>
                            Get exclusive discounts, shop collections early, and 
                            other rewards for creating an account and being a part of the {'{store}'} family.
                        </p>
                        <img src={home} className="h-32 m-auto" alt="home" />
                    </div>
                </ScreenContainer>
            </div>

            <div>
                <ScreenContainer>
                    <form className='md:py-14 lg:py-12 lg:px-16 lg:mx-auto'>
                        <div className='text-center mb-8'>
                            <h1 className='text-gray-900 text-2xl font-bold'>Create your {`{store}`} account</h1>
                            <p className='text-gray-600 py-2 text-xs font-thin'>
                                Already have an account?&nbsp;
                                <Link to={'/login'} className='underline'>Sign In</Link>
                            </p>
                        </div>
                        <div className='flex flex-col'>
                            <input type="email" className='text-sm text-gray-700 px-4 py-3 w-full my-2 border-0 ring-1 ring-gray-600 focus:outline-0 focus:ring-1 focus:ring-gray-800' placeholder="Email" required />
                            <input type="password" className='text-sm text-gray-700 px-4 py-3 w-full my-2 border-0 ring-1 ring-gray-600 focus:outline-0 focus:ring-1 focus:ring-gray-800' placeholder="Password" required />
                            <input type="password" className='text-sm text-gray-700 px-4 py-3 w-full my-2 border-0 ring-1 ring-gray-600 focus:outline-0 focus:ring-1 focus:ring-gray-800' placeholder="Confirm Password" required />
                            <button
                                type='submit'
                                className="flex w-full items-center justify-center px-4 py-3 my-5 text-xs font-light border border-transparent bg-gray-900 ring-1 ring-gray-900 text-white hover:bg-gray-800"
                            >
                                Create an Account
                            </button>
                            <p className='text-gray-600 text-xs font-thin text-left'>
                                By providing your email address, you agree to our&nbsp;
                                <Link to="#" className='underline'>Privacy Policy</Link> and&nbsp;
                                <Link to="#" className='underline'>Terms &amp; Conditions</Link>
                            </p>
                        </div>
                    </form>
                </ScreenContainer>
            </div>
        </div>
    </div>
  )
}

export default RegisterScreen