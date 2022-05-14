import React from 'react';
import ServiceCard from './ServiceCard';
import whitening from '../../assets/images/whitening.png';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import treatment from '../../assets/images/treatment.png';
import PrimaryButton from '../Shared/Header/PrimaryButton';

const OurServices = () => {
    return (
        <div className='my-[70px]'>
            <h2 className='text-secondary font-bold text-[20px]'>OUR SERVICES</h2>
            <h1 className='text-[36px]'>Services We Provide</h1>
            <div className='card bg-base-100 grid grid-cols-1 md:grid-cols-3 gap-[34px] p-4 pt-[60px]'>
                <ServiceCard imgSrc={fluoride} title="Fluoride Treatment"></ServiceCard>
                <ServiceCard imgSrc={cavity} title="Cavity Filling"></ServiceCard>
                <ServiceCard imgSrc={whitening} title="Teeth Whitening"></ServiceCard>
            </div>
            <div className="hero min-h-screen md:px-[84px]  mt-[60px]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='w-full md:w-[497px] text-left order-2 md:order-1'>
                        <h1 className="text-[48px] font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryButton>get Started</PrimaryButton>
                    </div>
                    <img className='w-full md:w-[458px]  md:mr-[102px] rounded-lg order-1 md:order-2 ' src={treatment} alt="" />
                </div>
            </div>
        </div>
    );
};

export default OurServices;