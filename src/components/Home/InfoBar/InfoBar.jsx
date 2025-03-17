import React from 'react'
import payment from '../../../assets/icons/payment.png'
import support from '../../../assets/icons/customer-support.png'
import shipping from '../../../assets/icons/shipping.png'
import value from '../../../assets/icons/best_value.png'

export default function InfoBar() {
    return (
        <div className='mt-12 lg:mt-0 lg:h-[151px] bg-[#31418C4D] grid grid-cols-1 lg:grid-cols-4 gap-[32px] px-[135px] py-[30px]'>
            <div className='flex items-center gap-5'>
                <img src={payment} alt='payment' />
                <p className='text-[22px] font-medium text-white' style={{ fontFamily: 'Neue Montreal' }}>Secure Payment</p>
            </div>
            <div className='flex items-center gap-5'>
                <img src={support} alt='payment' />
                <p className='text-[22px] font-medium text-white' style={{ fontFamily: 'Neue Montreal' }}>Online Support</p>
            </div>
            <div className='flex items-center gap-5'>
                <img src={shipping} alt='payment' />
                <p className='text-[22px] font-medium text-white' style={{ fontFamily: 'Neue Montreal' }}>Free Shipping</p>
            </div>
            <div className='flex items-center gap-5'>
                <img src={value} alt='payment' />
                <p className='text-[22px] font-medium text-white' style={{ fontFamily: 'Neue Montreal' }}>Best Value</p>
            </div>
        </div>
    )
}
