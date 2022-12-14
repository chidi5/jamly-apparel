import React, { useEffect, useState } from 'react'
import home from '../style/static/images/ezgif.png';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import ScreenContainer from './ScreenContainer'
import { register } from '../actions/user';
import Message from '../components/Message';
import Loader from '../components/Loader'
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../components/Layout';

function RegisterScreen() {
    const [email, setEmail] = useState('')
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [store, setStore] = useState('4')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { search } = useLocation()

    const redirect = search ? search.split('=')[1] : '/'

    const userRegister = useSelector(state => state.userRegister)
    const { error, loading, userInfo } = userRegister

    useEffect(() => {
        if (userInfo) {
            navigate(redirect)
        }
    }, [navigate, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            setMessage('Passwords do not match')
        } else {
            dispatch(register(email, first_name, last_name, password, store))
        }
    }

    return (
        <Layout
            showFooter={true}
            showHeader={true} 
        >
            {message && <Message variant='red'>{message}</Message>}
            {loading ?
            <Loader />
            :
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
                        <form className='md:py-14 lg:py-12 lg:px-16 lg:mx-auto' onSubmit={submitHandler}>
                            <div className='text-center mb-8'>
                                <h1 className='text-gray-900 text-2xl font-bold'>Create your {`{store}`} account</h1>
                                <p className='text-gray-600 py-2 text-xs font-thin'>
                                    Already have an account?&nbsp;
                                    <Link to={'/login'} className='underline'>Sign In</Link>
                                </p>
                            </div>
                            <div className='flex flex-col'>
                                <input 
                                    type="email"
                                    name='email'
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className='text-sm text-gray-700 px-4 py-3 w-full my-2 rounded-none border border-gray-900 ring-1 ring-gray-600 focus:outline-0 focus:ring-1 focus:ring-gray-800'
                                    placeholder="Email"
                                    required 
                                />
                                <input
                                    type="text" 
                                    name="first_name" 
                                    id="first_name"
                                    value={first_name}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    className='text-sm text-gray-700 px-4 py-3 w-full my-2 rounded-none border border-gray-900 ring-1 ring-gray-600 focus:outline-0 focus:ring-1 focus:ring-gray-800'
                                    placeholder="First name"
                                    required
                                />
                                <input
                                    type="text" 
                                    name="last_name" 
                                    id="last_name"
                                    value={last_name}
                                    onChange={(e) => setLastName(e.target.value)}
                                    className='text-sm text-gray-700 px-4 py-3 w-full my-2 rounded-none border border-gray-900 ring-1 ring-gray-600 focus:outline-0 focus:ring-1 focus:ring-gray-800'
                                    placeholder="Last name"
                                    required
                                />
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className='text-sm text-gray-700 px-4 py-3 w-full my-2 rounded-none border border-gray-900 ring-1 ring-gray-600 focus:outline-0 focus:ring-1 focus:ring-gray-800'
                                    placeholder="Password"
                                    required
                                />
                                <input
                                    type="password"
                                    name="password1"
                                    id="password1"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className='text-sm text-gray-700 px-4 py-3 w-full my-2 rounded-none border border-gray-900 ring-1 ring-gray-600 focus:outline-0 focus:ring-1 focus:ring-gray-800'
                                    placeholder="Confirm Password"
                                    required
                                />
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
            }
        </Layout>
    )
}

export default RegisterScreen