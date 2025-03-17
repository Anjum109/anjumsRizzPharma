import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../assets/logo.png";
import icon1 from "../../assets/icons/facebook.png";
import icon2 from "../../assets/icons/insta.png";
import cart from "../../assets/icons/Icon-cart.png";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="md:px-5">
            <nav className=" text-white px-6 w-full  py-4 lg:gap-[95px] flex justify-between items-center">
                {/* Logo */}
                <img src={logo} alt="Logo" className="w-[80px] h-[100px] md:w-[111px] md:h-[139px]" />
                <div className="hidden md:block lg:block">
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
                    </div>
                </div>
                {/* Mobile Menu Button */}
                <div className="lg:hidden md:hidden">
                    <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <AiOutlineClose size={28} /> : <FiMenu size={28} />}
                    </button>

                    {/* Navigation Menu */}
                    <div className="lg:hidden  w-full">
                        <div className={`fixed lg:w-full top-0 left-0 h-full w-[250px] bg-black md:bg-transparent md:static md:w-auto md:flex md:items-center md:gap-[95px] transition-transform duration-300 ease-in-out ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                            <ul className="flex flex-col md:flex-row items-center gap-6 text-white font-[400] p-5 md:p-0" style={{ fontFamily: 'Neue Montreal' }}>
                                {["Home", "Category", "Top Product", "Contact Us", "FAQs"].map((item, index) => (
                                    <li key={index} className="flex items-end gap-1 cursor-pointer">
                                        {item}
                                        {(item === "Category" || item === "Top Product") && <IoIosArrowDown size={16} />}
                                    </li>
                                ))}
                                {/* Social Icons */}
                                <div className="flex items-center gap-2">
                                    <img src={icon2} alt="Instagram" className="w-[24px] h-[24px]" />
                                    <img src={icon1} alt="Facebook" className="w-[24px] h-[24px]" />
                                </div>
                            </ul>

                        </div>
                    </div>
                </div>
                {/* Buttons */}


            </nav>
            <div className="flex justify-end md:flex items-center gap-[16px] lg:mt-[-40px] me-5">
                <button className="bg-[#ECC974] border-[#C1842D] rounded-[50px] text-[16px] w-[86px] h-[35px]">
                    Signup
                </button>
                <button className="rounded-[50px] text-[16px] w-[77px] h-[35px] border-[1px] border-[#FAF8F2] text-[#FAF8F2]">
                    Login
                </button>
                <img src={cart} alt="Cart" className="w-[36px] h-[36px]" />
            </div>
        </div>
    );
}
