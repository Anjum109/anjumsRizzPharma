import React from 'react'
import ProductNavbar from './ProductNavbar'
import ProductCard from './ProductCard'

export default function Product() {
    return (
        <div>
            <div className='mt-[70px]'>
                <h1 className=' impact-font text-[48px] text-center text-white'>Solutions for Your  <span className='category_h1'>Unique</span> Health Goals</h1>
            </div>
            <ProductNavbar />
            <ProductCard />
        </div>
    )
}
