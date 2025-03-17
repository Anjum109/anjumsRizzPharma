import React from 'react'
import search_icon from '../../assets/icons/search.png'
export default function SearchBox() {
    return (
        <div className='flex justify-center mt-12 lg:mt-[160px]'>
            <div className='w-full py-3 lg:py-0 lg:w-[612px] lg:h-[75px] rounded-[100px] flex justify-start px-[20px] lg:px-[40px] items-center border-[1px] border-[#FFFFFF]'>
                <img src={search_icon} alt='search_icon' />
                <input type='text' placeholder='Search by product/treatment' className='text-[16px] lg:text-[20px] font-medium text-white placeholder-white ms-[43px] w-full outline-none' style={{ fontFamily: 'Neue Montreal' }} />
            </div>
        </div>
    )
}
