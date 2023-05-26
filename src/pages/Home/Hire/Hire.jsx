import React from 'react';
import birthday from '../../../assets/birthday.jpg';
import anniversary from '../../../assets/anniversary.jpg';
import bbq from '../../../assets/bbq.jpg';
import specialEvents from '../../../assets/special-events.jpg';

const Hire = () => {
    return (
        <div className='my-container my-20'>
            <div className='text-center mb-5'>
                <h2 className='font-merriweather font-extrabold text-xl md:text-3xl'>Hire Personal Chef for Events</h2>
                <p className='mt-2 mb-5'>Indulge in personalized culinary experiences with our event chefs.</p>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div style={{background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${birthday}) no-repeat center / cover` }} className="h-[200px] md:h-[416px] md:row-span-3 rounded-xl">

                    <div className='text-white h-full flex items-center justify-center'>
                        <button className='border border-white rounded-full px-5 py-2'>ANNIVERSARY</button>
                    </div>
                </div>

                <div style={{background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${anniversary}) no-repeat center / cover` }} className="h-[200px] rounded-xl">

                    <div className='text-white h-full flex items-center justify-center'>
                        <button className='border border-white rounded-full px-5 py-2'>BIRTHDAY PARTY</button>
                    </div>
                </div>

                <div style={{background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bbq}) no-repeat center / cover` }} className="h-[200px] rounded-xl">

                    <div className='text-white h-full flex items-center justify-center'>
                        <button className='border border-white rounded-full px-5 py-2'>BBQ PARTY</button>
                    </div>
                </div>

                <div style={{background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${specialEvents}) no-repeat center / cover` }} className="h-[200px] md:col-span-2 rounded-xl">
                    <div className='text-white h-full flex items-center justify-center'>
                        <button className='border border-white rounded-full px-5 py-2'>SPECIAL EVENTS</button>
                    </div>
                </div>
            </div>

            <div className='text-center mt-5'>
                <button className='btn-custom'>Browse Menus</button>
            </div>
        </div>
    );
};

export default Hire;