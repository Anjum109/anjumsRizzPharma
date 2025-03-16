import React from 'react'
import image1 from '../../../assets/category_images/weight_loss.png'
import image2 from '../../../assets/category_images/sexual_health.png'
import image3 from '../../../assets/category_images/brain_health.png'
import image4 from '../../../assets/category_images/hrt.png'
import image5 from '../../../assets/category_images/athlatic.png'
import image6 from '../../../assets/category_images/beauty.png'
export default function CategoryCard() {
    return (
        <div className='grid-cols-1 lg:grid-cols-3 grid gap-5' style={{ fontFamily: 'Neue Montreal' }}>
            <div className='w-[370px] h-[450px] rounded-[24px] category_card_one'>
                <div className="absolute z-10 text-white  p-[24px]">
                    <h1 className="text-white text-2xl font-bold text-[36px]" >Weight <br />
                        Loss</h1>
                </div>
                <div className='flex justify-end'>
                    <img src={image1} alt='' className='rounded-tr-[24px] rounded-br-[24px]' />
                </div>

            </div>
            <div className='w-[370px] h-[376px] rounded-[24px] category_card_two'>
                <div className="absolute z-10 text-white  p-[24px]">
                    <h1 className="text-white text-2xl font-bold text-[36px]" >Weight <br />
                        Loss</h1>
                </div>
                <div className='flex justify-end'>
                    <img src={image2} alt='' className='rounded-tr-[24px] rounded-br-[24px]' />
                </div>
            </div>
            <div className='w-[370px] h-[450px] rounded-[24px] category_card_three'>
                <div className="absolute z-10 text-white  p-[24px]">
                    <h1 className="text-white text-2xl font-bold text-[36px]" >Weight <br />
                        Loss</h1>
                </div>
                <div className='flex justify-end'>
                    <img src={image3} alt='' className='rounded-tr-[24px] rounded-br-[24px]' />
                </div>
            </div>
            <div className='w-[370px] h-[376px] rounded-[24px] category_card_four'>
                <div className="absolute z-10 text-white  p-[24px]">
                    <h1 className="text-white text-2xl font-bold text-[36px]" >Weight <br />
                        Loss</h1>
                </div>
                <div className='flex justify-end'>
                    <img src={image4} alt='' className='rounded-tr-[24px] rounded-br-[24px]' />
                </div>
            </div>
            <div className='w-[370px] h-[450px] rounded-[24px] category_card_five lg:mt-[-73px]'>
                <div className="absolute z-10 text-white  p-[24px]">
                    <h1 className="text-white text-2xl font-bold text-[36px]" >Weight <br />
                        Loss</h1>
                </div>
                <div className='flex justify-end lg:mt-[34px]'>
                    <img src={image5} alt='' className='rounded-tr-[24px] rounded-br-[24px]' />
                </div>
            </div>
            <div className='w-[370px] h-[376px] rounded-[24px] category_card_six'>
                <div className="absolute z-10 text-white  p-[24px]">
                    <h1 className="text-white text-2xl font-bold text-[36px]" >Weight <br />
                        Loss</h1>
                </div>
                <div className='flex justify-end'>
                    <img src={image6} alt='' className='rounded-tr-[24px] rounded-br-[24px]' />
                </div>
            </div>
        </div>
    )
}
