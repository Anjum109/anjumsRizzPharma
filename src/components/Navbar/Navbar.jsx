import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import logo from "../../assets/logo.png";
import icon1 from "../../assets/icons/facebook.png"; // Replace with your actual image path
import icon2 from "../../assets/icons/insta.png"; // Replace with your actual image path
import cart from "../../assets/icons/Icon-cart.png"; // Replace with your actual image path

export default function Navbar() {
    return (
        <div className="flex justify-between items-center px-[135px] py-[30px]">
            <img src={logo} alt="Logo" className="w-[111px] h-[139px]" />

            <div className="flex flex-col justify-between items-end gap-[55px]">
                <div className="flex items-center gap-[95px]">
                    {/* Navigation Menu */}
                    <ul className="flex items-center gap-6 text-[#FAF8F2] font-[400]" style={{ fontFamily: 'Neue Montreal' }}>
                        {["Home", "Category", "Top Product", "Contact Us", "FAQs"].map(
                            (item, index) => (
                                <li key={index} className="flex items-center gap-1 cursor-pointer">
                                    {item}
                                    {/* Dropdown icon for 'Category' and 'Top Product' */}
                                    {item === "Category" || item === "Top Product" ? (
                                        <IoIosArrowDown size={16} />
                                    ) : null}
                                </li>
                            )
                        )}
                        {/* Add icons after the last menu item (FAQs) */}
                        <div className="flex items-center gap-2">
                            <img src={icon2} alt="Icon1" className="w-[24px] h-[24px]" />
                            <img src={icon1} alt="Icon2" className="w-[24px] h-[24px]" />
                        </div>
                    </ul></div>


                {/* Buttons */}
                <div className="flex items-center gap-[16px]">
                    <button className="bg-[#ECC974] border-[#C1842D] rounded-[50px] text-[16px] w-[86px] h-[35px]">
                        Signup
                    </button>
                    <button className="rounded-[50px] text-[16px] w-[77px] h-[35px] border-[1px] border-[#FAF8F2] text-[#FAF8F2]">
                        Login
                    </button>
                    <img src={cart} alt="Icon2" className="w-[36px] h-[36px]" />
                </div>
            </div>
        </div>
    );
}
