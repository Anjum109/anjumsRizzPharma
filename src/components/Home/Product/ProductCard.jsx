import React, { useEffect, useState } from "react";
import icon from '../../../assets/icons/Icon-dashboard.png'
export default function ProductCard() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch product data from an API
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((data) => setProducts(data.products.slice(0, 8))) // Limit to 8 items
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className="grid grid-cols-4 gap-5 mt-12">
            {products.map((product) => (
                <div
                    key={product.id}
                    className="w-[270px] bg-[#31418C4D] rounded-[12px]"
                    style={{ fontFamily: "Neue Montreal" }}
                >
                    {/* Research/Recurring Tag */}
                    <div className="text-white flex justify-end">
                        <button className="product_card_button text-[13px] font-medium w-[133px] h-[28px] rounded-tr-[12px] rounded-bl-[12px]">
                            {product.category || "Research use only"}
                        </button>
                    </div>

                    {/* Image & Product Name */}
                    <div className="flex justify-between items-center gap-4 px-[40px] mt-[-10px]">
                        <img
                            src={product.thumbnail}
                            alt={product.title}
                            className="w-[70px] h-[157px] object-cover"
                        />
                        <h1 className="text-[18px] font-normal product_name">
                            {product.title}
                        </h1>
                    </div>

                    {/* Price & Buy Button */}
                    <div className="bg-[#1F1F1F4D] h-[65px] rounded-br-[12px] rounded-bl-[12px] flex justify-between items-center">
                        <p className="text-[12px] font-medium text-white ps-[24px]">
                            ${product.price}/per month
                        </p>
                        <div className="cursor-pointer product_card_icon_bg w-[87px] h-full rounded-br-[12px] flex items-center justify-center">
                            <img src={icon} alt='icon' />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
