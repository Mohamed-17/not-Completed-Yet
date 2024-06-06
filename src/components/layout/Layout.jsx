import React from 'react'
import { FirstBar } from '../firstBar/FirstBar'
import { Outlet } from 'react-router-dom'
import { Footer } from '../footer/Footer'
import { Navbar } from '../navbar/Navbar'
import { Home } from '../home/Home'
export const Layout = () => {
  return (
   <div>
   <FirstBar/>
   <Navbar/>
  
   <Outlet>
   <Home/>
   </Outlet>
   <Footer/>
   </div>

  )
}
