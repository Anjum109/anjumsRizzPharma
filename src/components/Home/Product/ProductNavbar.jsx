import React from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";

export default function ProductNavbar({ activeTab, setActiveTab }) {
    const buttons = [
        "All",
        "Best Selling Products",
        "Weight Loss",
        "Beauty And Hair Loss",
        "Testosterone/HRT",
        "Sexual Health"
    ];

    return (
        <div className='text-[20px] font-medium text-white flex justify-between items-center mt-[50px]'>
            {buttons.map((btn, index) => (
                <button
                    key={index}
                    className={`p-5 border-[1px] border-white rounded-[100px] transition-all
                        ${activeTab === btn ? "bg-[#E1C06E] text-black" : "text-white"}`}
                    onClick={() => setActiveTab(btn)}
                >
                    {btn}
                </button>
            ))}
            <button className='px-6 py-5 border-[1px] border-white rounded-[100px]'>
                <IoIosArrowRoundForward width={40} />
            </button>
        </div>
    );
}
