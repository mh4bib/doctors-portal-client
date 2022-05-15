import React from 'react';
import OurServices from '../OurServices/OurServices';
import Appointment from './Appointment';
import Banner from './Banner/Banner';
import BannerCard from './BannerCard';
import Footer from './Footer';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BannerCard></BannerCard>
            <OurServices></OurServices>
            <Appointment></Appointment>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
};

export default Home;