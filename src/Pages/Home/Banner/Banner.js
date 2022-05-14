import React from 'react';
import chair from '../../../assets/images/chair.png';
import PrimaryButton from '../../Shared/Header/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero min-h-screen md:px-[84px] bg-banner">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img className='w-full md:w-[594px]' src={chair} alt="" />
                <div className='w-full md:w-[655px] text-left'>
                    <h1 className="text-[48px] font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <PrimaryButton>get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;