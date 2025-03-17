import React from 'react'

export default function Banner() {
    return (
        <div className='mt-[75px]'>
            <h1 className='text-[#FFFFFF] hidden lg:block lg:text-[80px] lg:w-[500px] impact-font leading-[120%]'>
                Prescription Treatments For Your <br></br> <span className='text-[#ECC974]'>Health Goals</span>
            </h1>
            <h1 className='lg:hidden text-[#FFFFFF] mx-5  md:text-[50px] text-[40px] impact-font leading-[120%]'>
                Prescription Treatments For Your  <span className='text-[#ECC974]'>Health Goals</span>
            </h1>
            <div className='lg:mt-[50px] mt-[30px] mx-5 lg:mx-0'>
                <button className='lg:w-[248px] px-5 py-2 lg:px-0 lg:py-0 lg:h-[66px] find-my-treatment-button text-[14px] lg:text-[22px] font-bold text-[#FFFFFF] text-center ' style={{ fontFamily: 'Neue Montreal' }}>Find my treatment</button>
            </div>

        </div>
    )
}
