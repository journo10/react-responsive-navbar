import React from 'react';
import Navbar from "../Navbar"
import "./layout.css"

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <div className='children' >{children}</div>
        </>
    )
}

export default Layout