import React from 'react'
import medicine from '../../../assets/product/medicine.png'
import icon from '../../../assets/icons/Icon-dashboard.png'
export default function ProductCard() {
    return (
        <div className='grid grid-cols-4 gap-5 mt-12'>
            <div className='w-[270px] bg-[#31418C4D] rounded-[12px]' style={{ fontFamily: 'Neue Montreal' }}>
                <div className='text-white flex justify-end'><button className='product_card_button text-[13px] font-medium w-[133px] h-[28px] rounded-tr-[12px] rounded-bl-[12px]' >Research use only</button></div>
                <div className='flex justify-between items-center px-[40px] mt-[-10px]'>
                    <img src={medicine} alt='medicine' />
                    <h1 className='text-[18px] font-normal product_name' >Retarutide</h1>
                </div>
                <div className='bg-[#1F1F1F4D] h-[65px] rounded-br-[12px] rounded-bl-[12px] flex justify-between items-center'>
                    <p className='text-[12px] font-medium text-white ps-[24px] '>$39.99/per month</p>
                    <div className=' cursor-pointer product_card_icon_bg w-[87px] h-full rounded-br-[12px] flex items-center justify-center'>
                        <img src={icon} alt='icon' />
                    </div>
                </div>
            </div>
        </div>
    )
}
