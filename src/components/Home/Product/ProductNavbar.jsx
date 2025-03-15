import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

export default function ProductNavbar() {
    return (
        <div className='text-[20px] font-medium text-white flex justify-between items-center mt-[50px]'>
            <button className='p-5 border-[1px] border-white rounded-[100px]'>All</button>
            <button className='p-5 border-[1px] border-white rounded-[100px]'>Best Selling Products</button>
            <button className='p-5 border-[1px] border-white rounded-[100px]'>Weight Loss</button>
            <button className='p-5 border-[1px] border-white rounded-[100px]'>Beauty And Hair Loss</button>
            <button className='p-5 border-[1px] border-white rounded-[100px]'>Testosterone/HRT</button>
            <button className='p-5 border-[1px] border-white rounded-[100px]'>Sexual Health</button>
            <button className='px-6 py-5 border-[1px] border-white rounded-[100px]'><IoIosArrowRoundForward width={40} /></button>
            {/* <button className='p-5 border-[1px] border-white rounded-[100px]'>Extra</button> */}
        </div>
    )
}
