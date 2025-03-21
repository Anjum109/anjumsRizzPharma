import React from 'react'
import image from '../../../assets/background/freepik__expand-the-image-to-3000px__9476\ 1\ 1.svg'
import arrow from '../../../assets/icons/arrow.png'
export default function VirtualPortion() {
    return (
        <div className='mt-20 '>
            <div className='lg:flex justify-between px-5 lg:px-[135px] py-[29px] absolute w-full'>
                <div className='text-white text-[28px] lg:text-[58px] impact-font'>
                    <p>100% Online,
                    </p>
                    <p>100% Convenient</p>
                </div>
                <div className=' text-[10px] lg:text-[14px] mt-2 lg:mt-0 font-normal text-white' style={{ fontFamily: 'Neue Montreal' }}>
                    <div className='flex gap-3 items-center '>
                        <img src={arrow} alt='arrow' className='lg:w-[18px] w-[10px] lg:h-[19px] h-[10px]' />
                        <p>Chat with a provider 24/7</p>
                    </div>
                    <div className='flex gap-3 items-center '>
                        <img src={arrow} alt='arrow' className='lg:w-[18px] w-[10px] lg:h-[19px] h-[10px]' />
                        <p>Fast, discreet shipping</p>
                    </div>
                    <div className='flex gap-3 items-center '>
                        <img src={arrow} alt='arrow' className='lg:w-[18px] w-[10px] lg:h-[19px] h-[10px]' />
                        <p>Clinically proven ingredients and FDA-approved treatments.</p>
                    </div>
                </div>
            </div>
            <img src={image} alt='img' className='w-full' />
        </div>
    )
}
