import React from 'react';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import TestimonialCard from './TestimonialCard';

const Testimonial = () => {
    return (
        <div className='card bg-base-100 grid grid-cols-1 md:grid-cols-3 gap-[34px] p-4 pt-[60px]'>
            <TestimonialCard Img={people1} Name={'Winson herry'} City={'California'}></TestimonialCard>
            <TestimonialCard Img={people2} Name={'Winson herry'} City={'California'}></TestimonialCard>
            <TestimonialCard Img={people3} Name={'Winson herry'} City={'California'}></TestimonialCard>
        </div>
    );
};

export default Testimonial;