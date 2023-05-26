import React, { useContext, useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating, Star } from '@smastrom/react-rating'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../../../styles.css";

// import required modules
import { Autoplay, Pagination } from "swiper";
import TestimonialBg from '../../../assets/testimonial-background.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { AuthContext } from '../../../providers/AuthProvider';

const Testimonial = () => {

    const [testimonials, setTestimonials] = useState([]);
    const { setPreloader } = useContext(AuthContext);

    useEffect(() => {

        fetch('https://delicious-world-server-mehedihasan-ofc.vercel.app/testimonials')
            .then(res => res.json())
            .then(data => {
                setTestimonials(data);
                setPreloader(false);
            });

    }, [])

    const myStyles = {
        itemShapes: Star,
        activeFillColor: '#ffb700',
        inactiveFillColor: '#fbf1a9'
    }

    return (
        <div className='my-container my-20'>
            <div className='text-center mb-5'>
                <h2 className='font-merriweather font-extrabold text-xl md:text-3xl'>Our Testimonials</h2>
                <p className='mt-2 mb-5'>Hear what our customers have to say</p>
            </div>
            {/* style={{ background: `url(${TestimonialBg}) no-repeat bottom / cover` }} */}
            <div className='rounded-md' style={{ background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${TestimonialBg}) no-repeat bottom / cover` }} >
                <div className='p-10 md:p-24'>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 2,
                                spaceBetween: 50,
                            },
                        }}
                        modules={[Autoplay, Pagination]}
                        className="mySwiper"
                    >

                        {
                            testimonials.map(testimonial => <SwiperSlide
                                key={testimonial.id}
                            >
                                <div className='w-14 h-14'>
                                    <LazyLoadImage effect="blur" className='rounded-full' src={testimonial.img} alt="" />
                                </div>

                                <h4 className='text-sm md:text-base my-1'>{testimonial.name}</h4>

                                <Rating
                                    style={{ maxWidth: 100 }}
                                    value={testimonial.rating}
                                    itemStyles={myStyles}
                                    readOnly
                                />

                                <p className='text-xs md:text-sm mt-2'>{testimonial.review}</p>
                            </SwiperSlide>)
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;