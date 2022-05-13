import React from 'react';
import ServiceCard from './ServiceCard';
import whitening from '../../assets/images/whitening.png';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import treatment from '../../assets/images/treatment.png';

const OurServices = () => {
    return (
        <div className='my-[70px]'>
            <h2 className='text-primary font-bold text-[20px]'>OUR SERVICES</h2>
            <h1 className='text-[36px]'>Services We Provide</h1>
            <div className='card bg-base-100 grid grid-cols-1 md:grid-cols-3 gap-[34px] p-4 pt-[60px]'>
                <ServiceCard imgSrc={fluoride} title="Fluoride Treatment"></ServiceCard>
                <ServiceCard imgSrc={cavity} title="Cavity Filling"></ServiceCard>
                <ServiceCard imgSrc={whitening} title="Teeth Whitening"></ServiceCard>
            </div>
            <div className="hero min-h-screen md:px-[84px]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='w-full md:w-[497px] text-left order-2 md:order-1'>
                        <h1 className="text-[48px] font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                    </div>
                    <img className='w-full md:w-[458px]  md:mr-[102px] rounded-lg order-1 md:order-2 ' src={treatment} alt="" />
                </div>
            </div>
        </div>
    );
};

export default OurServices;