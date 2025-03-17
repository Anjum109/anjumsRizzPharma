import React from 'react'
import sent from '../../assets/icons/sent.png'
import email from '../../assets/icons/elements.png'
import logo from '../../assets/icons/logo.png'
import certified from '../../assets/icons/certified.png'
import branding from '../../assets/branding.png'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
export default function Footer() {
    return (
        <div className='footer  lg:px-[135px] py-[100px]' style={{ fontFamily: 'Neue Montreal' }}>
            <div className='lg:flex gap-5 w-full'>
                <div className='lg:w-[50%] flex justify-center'>
                    <div className='lg:w-[413px]  rounded-[20px] p-[30px]  footer_border'>
                        <div className='text-white text-[33px] lg:text-[43px] font-medium mx-5 text-center'><h1 style={{ fontFamily: 'Neue Montreal' }}>Let’s Stay In Touch</h1></div>
                        <p className='text-white my-3 text-[16px] mx-6 text-center'>Keep up to date with our latest news & special offers.</p>
                        <div className=' my-4 rounded-[8px] py-2 px-4 flex justify-between border-[1px] border-white '>
                            <input type='text' placeholder='enter your email' className='placeholder:text-white' />
                            <img src={sent} alt='img' />
                        </div>
                    </div>
                </div>
                <div className='lg:w-[50%] mx-12 lg:mx-0 mt-12 grid grid-cols-1 lg:grid-cols-2'>
                    <div>
                        <ul className='text-white flex flex-col gap-5 text-[16px] font-medium'>
                            <li className='text-[12px]'>Quick Links</li>
                            <li>Erectile Dysfunction</li>
                            <li>Weight Loss</li>
                            <li>Men’s Hair Loss</li>
                            <li className='text-[12px] mt-5'>Contact Info</li>

                        </ul>
                        <div className='flex mt-3 gap-1 text-white items-center text-[16px] font-medium'>
                            <img src={email} alt='img' className='w-[13px] h-[11px]' />
                            <p className=''>hello@rizzpharma.com</p>
                        </div>
                    </div>
                    <div>
                        <ul className='text-white flex flex-col gap-5 text-[16px] font-medium'>
                            <li className='text-[12px]'>Our Company</li>
                            <li>HIPAA Notice</li>
                            <li>Privacy Policy</li>
                            <li>Return & Refund Policy</li>
                            <li>Terms Of Use</li>
                            <li>CCPA Opt-Out</li>
                            <li>Opt-Out Preferences</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='w-full mx-12 lg:mx-0 lg:flex my-12'>
                <div className='w-[50%]'>
                    <div className='flex justify-center items-center'>
                        <img src={logo} alt='logo' />
                    </div>
                </div>
                <div className='w-[50%]'>
                    <div className='text-white flex justify-center lg:justify-start gap-3'>
                        <div className='w-[36px] h-[36px] bg-[#434B76] rounded-full flex items-center justify-center'>
                            <FaFacebook />
                        </div>
                        <div className='w-[36px] h-[36px] bg-[#434B76] rounded-full flex items-center justify-center'>
                            <FaInstagram />
                        </div>
                    </div>
                    <div className='flex gap-3 mt-5 lg:mt-0 items-center mt-3 lg:pe-20'>
                        <img src={certified} alt='img' />
                        <p className='text-white text-[16px]'>Copyright © 2024 Rizz Pharma All Right Reserved - Built by Business Web Social</p>
                    </div>
                </div>
            </div>
            <div>
                <img src={branding} alt='logo' />
            </div>
        </div >
    )
}
