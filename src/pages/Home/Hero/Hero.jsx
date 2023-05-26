// import React from 'react';
// import HeroImg from '../../../assets/hero.png';

// external------------------>
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slider.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

// import required modules-------------------------->
// import { Pagination, Navigation } from "swiper";
// import { useNavigate } from 'react-router-dom';

const Hero = () => {

    const [slider, setSlider] = useState([]);
    // const [backgroundImage, setBackgroundImage] = useState('');
    // const [title, setTitle] = useState('');
    // const [description, setDescription] = useState('');
    // const navigate = useNavigate();

    useEffect(() => {

        fetch('https://delicious-world-server-mehedihasan-ofc.vercel.app/slider')
            .then(res => res.json())
            .then(data => {
                setSlider(data)
                // setTitle(data[0].destinationName)
                // setDescription(data[0].description)
                // setBackgroundImage(data[0].backgroundImage)
            })

    }, []);

    // const handleData = (bgImageURL, title, description) => {
    //     setBackgroundImage(bgImageURL);
    //     setTitle(title);
    //     setDescription(description);
    // }

    return (
        // <section>
        //     <div className='my-container grid md:grid-cols-2 items-center gap-5'>
        //         <div>

        //             <h1 className='font-bold font-merriweather text-3xl leading-snug md:text-5xl md:leading-tight'>Embark on a Flavorful Journey with Delicious World's Japanese Cuisine!</h1>
        //             <p className='md:text-base my-4'>Delicious World is a website that offers authentic Japanese cuisine, including sushi, tempura, miso soup, soba noodles, and more. They provide a carefully curated menu and information about the ingredients and techniques used in each dish.</p>
        //             <button className='btn-custom'>Get Started</button>
        //         </div>
        //         <div>
        //             <img src={HeroImg} alt="" />
        //         </div>
        //     </div>
        // </section>

        <div>
            <>
                <Swiper
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        dynamicBullets: true,
                    }}
                    slidesPerView={1}
                    loop={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {
                        slider.map((singleSlider, id) => <SwiperSlide
                            style={
                                {
                                    height: "85vh",
                                    borderRadius: "0",
                                    background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${singleSlider.image}) no-repeat center / cover`
                                }
                            }
                            key={id}

                        >
                            <h1 className="text-white font-bebas uppercase text-lg md:text-5xl">{singleSlider.title}</h1>
                            <p className="w-full md:w-2/4 text-xs md:text-base text-white py-3 md:py-5">{singleSlider.description}</p>

                            <div className="flex items-center gap-5">
                                <button className="border border-gray-100 text-white px-5 py-2 hover:border-yellow-500 hover:text-yellow-500 transition duration-200">Get Started</button>
                                <button className="border border-gray-100 text-white px-5 py-2 hover:border-yellow-500 hover:text-yellow-500 transition duration-200">Explore Now</button>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </>

            <div>

            </div>
        </div>
    );
};

export default Hero;