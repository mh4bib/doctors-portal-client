import React from 'react';

const TestimonialCard = ({ Img, Name, City }) => {
    return (
        <div className='rounded-[18px] p-[25px] shadow-xl'>
            <div className='mb-[25px]'>
                <p className='text-[16px] text-left'>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
            </div>
            <div className='flex items-center'>
                <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={Img} alt="" />
                    </div>
                </div>
                <div className='ml-[15px]'>
                    <h2 className='text-[20px] text-left'>{Name}</h2>
                    <p className='text-left'>{City}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;