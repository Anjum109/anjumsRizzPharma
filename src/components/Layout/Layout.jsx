import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'


export default function Layout({ children }) {
    return (
        <div>

            <div className='body-cover pb-[200px]'>
                <Navbar />
                {children}
            </div>
            <Footer />
        </div>
    )
}
