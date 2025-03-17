import React from 'react'
import ProductNavbar from './ProductNavbar'
import ProductCard from './ProductCard'

export default function Product() {
    return (
        <div>
            <div className='mt-[70px] mx-5 lg:mx-0'>
                <h1 className=' impact-font text-[35px] lg:text-[48px] text-center text-white'>Solutions for Your  <span className='category_h1'>Unique</span> Health Goals</h1>
            </div>
            <div className='hidden lg:block'>
                <ProductNavbar />
            </div>
            <ProductCard />
        </div>
    )
}
