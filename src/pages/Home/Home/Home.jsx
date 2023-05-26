import React from 'react';
import Hero from '../Hero/Hero';
import ChefList from '../ChefList/ChefList';
import Hire from '../Hire/Hire';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <>
            <Hero></Hero>
            <ChefList></ChefList>
            <Hire></Hire>
            <Testimonial></Testimonial>
        </>
    );
};

export default Home;