import React from 'react';
import Slider from 'react-slick';
import { FaStar, FaRegStar } from 'react-icons/fa';
import inverted_comma from '../../assets/icons/inverted-comma.svg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image from '../../assets/icons/profilr.png'
const reviews = [
    "I’ve tried every home remedy and hair care treatment but ended up with long waits and no results. Since I’ve started using Hims my hair has grown, thickened, and darkened tremendously.",
    "I’ve tried every home remedy and hair care treatment but ended up with long waits and no results. Since I’ve started using Hims my hair has grown, thickened, and darkened tremendously.",
    "I’ve tried every home remedy and hair care treatment but ended up with long waits and no results. Since I’ve started using Hims my hair has grown, thickened, and darkened tremendously.",
    "I’ve tried every home remedy and hair care treatment but ended up with long waits and no results. Since I’ve started using Hims my hair has grown, thickened, and darkened tremendously.",

];

export default function ReviewsSlider() {
    const settings = {

        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: true,
        appendDots: dots => (
            <div className='mt-5'>
                <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div style={{ width: "20px", height: "20px", background: "white", borderRadius: "50%" }}></div>
        )
    };

    return (
        <div className="slider-container mt-12 overflow-hidden">
            <Slider {...settings}>
                {reviews.map((review, index) => (
                    <div key={index} style={{ width: 450, margin: '0 20px' }} className="backdrop:backdrop-blur-3xl p-12">
                        <div className='bg-[#0b0b0b82] p-6 rounded-[15px]'>
                            <img src={inverted_comma} alt="quote" />
                            <p className="text-white text-[18px] font-medium py-5">{review}</p>
                            <div className="flex items-center gap-3 text-[#C1842D] justify-center py-5 text-[24px]">
                                {[...Array(3)].map((_, i) => <FaStar key={i} />)}
                                <FaRegStar />
                            </div>
                            <div className='flex justify-center gap-5'>
                                <img src={image} alt='img' />
                                <div className='text-white'>
                                    <p>John Williams</p>
                                    <p className='text-[#ffffff76]'>Lead designer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
