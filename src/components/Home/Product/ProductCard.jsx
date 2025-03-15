import React from 'react'
import medicine from '../../../assets/product/medicine.png'

export default function ProductCard() {
    return (
        <div className='grid grid-cols-4 gap-5'>
            <div className='w-[270px]'>
                <div className='text-white flex justify-end'><button className='product_card_button text-[13px] font-medium'>Research use only</button></div>
                <img src={medicine} alt='medicine' />
            </div>
        </div>
    )
}
