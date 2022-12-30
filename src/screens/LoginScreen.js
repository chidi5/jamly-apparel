import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { login } from '../actions/user'
import Layout from '../components/Layout'
import Loader from '../components/Loader'
import ScreenContainer from './ScreenContainer'

function LoginScreen() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { search } = useLocation()

    const redirect = search ? search.split('=')[1] : '/'

    const userLogin = useSelector(state => state.userLogin)
    const { error, loading, userInfo } = userLogin

    useEffect(() => {
        if (userInfo) {
            navigate(redirect)
        }
    }, [navigate, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }

    return (
        <Layout
            showFooter={true}
            showHeader={true} 
        >
            <ScreenContainer>
                {loading ?
                <Loader />
                :
                <form className='lg:max-w-2xl lg:my-0 lg:mx-auto' onSubmit={submitHandler}>
                    <div className='text-center mb-8'>
                        <h1 className='text-gray-900 text-2xl font-bold'>Sign in to your {`{store}`} account</h1>
                        <p className='text-gray-600 py-2 text-xs font-thin'>
                            Don't have an account?&nbsp;
                            <Link to={'/register'} className='underline'>Sign up</Link>
                        </p>
                        <p className='text-gray-600 text-xs font-thin'>
                            Your cart can't wait for you to checkout,
                            Sign in to continue your journey on the best shopping experience ever.
                        </p>
                    </div>
                    <div className='flex flex-col'>
                        <input
                            type="email"
                            name="email" 
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} 
                            className='text-sm text-gray-700 px-4 py-3 w-full my-2 rounded-none border border-gray-900 ring-1 ring-gray-600 focus:outline-0 focus:ring-1 focus:ring-gray-800'
                            placeholder="Email"
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
                        <button
                            type='submit'
                            className="flex w-full items-center justify-center px-4 py-3 my-5 text-xs font-light border border-transparent bg-gray-900 ring-1 ring-gray-900 text-white hover:bg-gray-800"
                        >
                            Log in
                        </button>
                        <Link to='#' className='underline text-gray-600 text-xs font-thin text-left'>Can't remember password?</Link>
                    </div>
                </form>
                }
            </ScreenContainer>
        </Layout>
    )
}

export default LoginScreen