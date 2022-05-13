import React from 'react';
import OurServices from '../OurServices/OurServices';
import Banner from './Banner/Banner';
import BannerCard from './BannerCard';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BannerCard></BannerCard>
            <OurServices></OurServices>
        </div>
    );
};

export default Home;