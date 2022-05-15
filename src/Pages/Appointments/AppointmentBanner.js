import React from 'react';
import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({date, setDate}) => {
    
    return (
        <div className="hero min-h-screen md:px-[84px] bg-banner">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img className='w-full md:w-[594px]' src={chair} alt="" />
                <div className='md:mr-[100px] bg-white shadow-xl rounded-xl'>
                <DayPicker 
                mode="single"
                selected={date}
                onSelect={setDate}
                />
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;