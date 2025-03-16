import React from 'react'
import image from '../../../assets/background/freepik__expand-the-image-to-3000px__9476\ 1\ 1.svg'
import arrow from '../../../assets/icons/arrow.png'
export default function VirtualPortion() {
    return (
        <div className='mt-20 '>
            <div className='flex justify-between px-[135px] py-[89px] absolute w-full'>
                <div className='text-white text-[58px] impact-font'>
                    <p>100% Online,
                    </p>
                    <p>100% Convenient</p>
                </div>
                <div className='text-[18px] font-normal text-white' style={{ fontFamily: 'Neue Montreal' }}>
                    <div className='flex gap-3 items-center '>
                        <img src={arrow} alt='arrow' />
                        <p>Chat with a provider 24/7</p>
                    </div>
                    <div className='flex gap-3 items-center '>
                        <img src={arrow} alt='arrow' />
                        <p>Fast, discreet shipping</p>
                    </div>
                    <div className='flex gap-3 items-center '>
                        <img src={arrow} alt='arrow' />
                        <p>Clinically proven ingredients and FDA-approved treatments.</p>
                    </div>
                </div>
            </div>
            <img src={image} alt='img' className='w-full' />
        </div>
    )
}
