import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './components/footer/Footer'
import AppBar from './components/header/appBar/AppBar'
function Layout() {
  return (
    <>
        <AppBar/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout
