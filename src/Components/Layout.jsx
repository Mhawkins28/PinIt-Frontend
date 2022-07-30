import React from 'react'
import Navbar from './Navbar'


const Layout = ({ children }) => {
    console.log(children)
  return (
    <div> 
        <Navbar />
        { children }
    </div>
  )
}

export default Layout