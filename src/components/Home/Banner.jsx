import React from 'react'

export default function Banner() {
    return (
        <div className='mt-[75px]'>
            <h1 className='text-[#FFFFFF] text-[80px] w-[500px] impact-font leading-[120%]'>
                Prescription Treatments For Your <br></br> <span className='text-[#ECC974]'>Health Goals</span>
            </h1>
            <div className='mt-[50px]'>
                <button className='w-[248px] h-[66px] find-my-treatment-button text-[22px] font-bold text-[#FFFFFF] text-center ' style={{ fontFamily: 'Neue Montreal' }}>Find my treatment</button>
            </div>

        </div>
    )
}
