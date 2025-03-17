import React, { useState } from 'react';
import ProductNavbar from './ProductNavbar';
import ProductCard from './ProductCard';
import WeightLoss from './WeightLoss';

export default function Product() {
    const [activeTab, setActiveTab] = useState("All");

    return (
        <div>
            <div className='mt-[70px] mx-5 lg:mx-0'>
                <h1 className='impact-font text-[35px] lg:text-[48px] text-center text-white'>
                    Solutions for Your <span className='category_h1'>Unique</span> Health Goals
                </h1>
            </div>
            <div className='hidden lg:block'>
                <ProductNavbar activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>


            {activeTab === "All" && <ProductCard />}
            {activeTab === "Beauty And Hair Loss" && <ProductCard />}
            {activeTab === "Weight Loss" && <WeightLoss />}
        </div>
    );
}
