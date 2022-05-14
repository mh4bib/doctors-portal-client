import React from 'react';

const ServiceCard = ({ imgSrc, title }) => {
    return (
        <div className='rounded-[18px] p-[33px] shadow-xl'>
            <figure><img className='w-[116px]' src={imgSrc} alt="Album" /></figure>
            <div className='card-body'>
                <h2 className="text-center text-[20px]">{title}</h2>
                <p className='text-[16px]'>Click the button to listen on Spotiwhy app. Click the button to listen</p>
            </div>
        </div>
    );
};

export default ServiceCard;