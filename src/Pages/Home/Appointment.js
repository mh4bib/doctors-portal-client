import React from 'react';
import appointment from '../../assets/images/appointment.png';
import doctor from '../../assets/images/doctor.png';

const Appointment = () => {
    return (
        <div className="hero min-h-screen mt-[60px] mb-[60px] bg-appointment">
                <div className="hero-content flex-col lg:flex-row-reverse p-4 md:p-0">
                    <div className='text-left text-white'>
                    <h2 className='text-secondary font-bold text-[20px]'>APPOINTMENT</h2>
                        <h1 className="text-[48px] font-[1200]">Make an appointment Today</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                    </div>
                    <img className='hidden md:block w-[606px] ' src={doctor} alt="" />
                </div>
            </div>
    );
};

export default Appointment;