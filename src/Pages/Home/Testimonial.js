import React from 'react';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import quote from '../../assets/icons/quote.svg';
import TestimonialCard from './TestimonialCard';

const Testimonial = () => {
    return (
        <div className='p-4 md:px-8'>
            <div className='flex justify-between items-center'>
                <div>
                    <h3 className='text-secondary font-bold text-[20px] text-left'>Testimonial</h3>
                    <h2 className='text-[36px] text-left'>What Our Patient Says</h2>
                </div>
                <img className='w-[98px] md:w-[192px]' src={quote} alt="" />
            </div>
            <div className='card bg-base-100 grid grid-cols-1 md:grid-cols-3 gap-[34px] py-[60px] md:px-8'>
                <TestimonialCard Img={people1} Name={'Winson herry'} City={'California'}></TestimonialCard>
                <TestimonialCard Img={people2} Name={'Winson herry'} City={'California'}></TestimonialCard>
                <TestimonialCard Img={people3} Name={'Winson herry'} City={'California'}></TestimonialCard>
            </div>
        </div>
    );
};

export default Testimonial;