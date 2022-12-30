import React from 'react'
import Footer from './Footer'
import Header from './Header'

function Layout({ showFooter, showHeader, children }) {
  return (
    <>
        {showHeader && <Header/>}
        {children}
        {showFooter && <Footer/>}
    </>
  )
}

export default Layout
