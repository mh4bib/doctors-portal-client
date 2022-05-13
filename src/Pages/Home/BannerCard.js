import React from 'react';
import clock from '../../assets/icons/clock.svg';
import location from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const BannerCard = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-[24px] p-4 text-white'>
            <div className='flex flex-col md:flex-row bg-primary p-[25px] items-center rounded-[14px] bg-gradient-to-r from-secondary to-primary'>
                <img className='w-[86px]' src={clock} alt="" />
                <div className='text-left mt-[24px] md:ml-[24px] md:mt-0'>
                    <h3 className='text-[20px] font-bold'>Opening Hours</h3>
                    <p>Lorem Ipsum is simply dummy text of the pri</p>
                </div>
            </div>
            <div className='flex flex-col md:flex-row bg-primary p-[25px] items-center rounded-[14px] bg-accent'>
                <img className='w-[62px]' src={location} alt="" />
                <div className='text-left mt-[24px] md:ml-[24px] md:mt-0'>
                    <h3 className='text-[20px] font-bold'>Opening Hours</h3>
                    <p>Lorem Ipsum is simply dummy text of the pri</p>
                </div>
            </div>
            <div className='flex flex-col md:flex-row bg-primary p-[25px] items-center rounded-[14px] bg-gradient-to-r from-secondary to-primary'>
                <img className='w-[77px]' src={phone} alt="" />
                <div className='text-left mt-[24px] md:ml-[24px] md:mt-0'>
                    <h3 className='text-[20px] font-bold'>Opening Hours</h3>
                    <p>Lorem Ipsum is simply dummy text of the pri</p>
                </div>
            </div>
        </div>
    );
};

export default BannerCard;