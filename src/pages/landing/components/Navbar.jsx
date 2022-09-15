import React from 'react'
import './Navbar.css'

const Navbar = (props) => {
    const { children } = props 

    return (
        <div className='navbar__container'>
           {children}
        </div>
    )
}

export default Navbar
