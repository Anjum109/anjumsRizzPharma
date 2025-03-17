import React from 'react'
import ReviewsSlider from './ReviewsSlider'
import inverted_comma from '../../assets/icons/inverted-comma.svg';
import { FaStar, FaRegStar } from 'react-icons/fa';

import image from '../../assets/icons/profilr.png'
export default function Reviews() {
    return (
        <div className=' mt-[50px] lg:mt-[200px]'>
            <h1 className=' impact-font text-[35px] lg:text-[48px] text-center text-white'>Hear What  <span className='category_h1'>Rizz</span> Patients Have To Say</h1>
            <div className='hidden lg:block'>
                <ReviewsSlider />
            </div>
            <div className='lg:hidden py-20'>
                <div className='bg-[#0b0b0b82] border-2 border-[#414040bb] mx-5 p-6 rounded-[15px]'>
                    <img src={inverted_comma} alt="quote" />
                    <p className="text-white text-[18px] font-medium py-5">   "I’ve tried every home remedy and hair care treatment but ended up with long waits and no results. Since I’ve started using Hims my hair has grown, thickened, and darkened tremendously."</p>
                    <div className="flex items-center gap-3 text-[#C1842D] justify-center py-5 text-[24px]">
                        {[...Array(3)].map((_, i) => <FaStar key={i} />)}
                        <FaRegStar />
                    </div>
                    <div className='flex justify-center gap-5'>
                        <img src={image} alt='img' />
                        <div className='text-white'>
                            <p>John Williams</p>
                            <p className='text-[#ffffff76]'>Lead designer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
