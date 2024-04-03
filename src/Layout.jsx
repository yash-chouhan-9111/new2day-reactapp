import React from 'react'
import Sidebar from './components/Sidebar'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import { AppProvider } from './context/AppContext'
import Footer from './components/Footer'

const Layout = () => {
  
  return (
    <AppProvider>
      <Sidebar/>
      <Navbar/>
      <div className=''>
        <Outlet className=""/>
      </div>
      <div className='relative bottom-0 '>
        <Footer/>
      </div>
    </AppProvider>
  )
}

export default Layout
