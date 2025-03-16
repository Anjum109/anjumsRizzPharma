import React from 'react'
import CategoryCard from './CategoryCard'

export default function Category() {
    return (
        <div className='mt-[70px]'>
            <h1 className=' impact-font text-[48px] text-center text-white'>Shop by <span className='category_h1'>Category</span></h1>
            <CategoryCard />
        </div>
    )
}
