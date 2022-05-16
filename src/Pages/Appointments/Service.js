import React from 'react';
import PrimaryButton from '../Shared/Header/PrimaryButton';

const Service = ({service, setTreatment}) => {
    const {name, slots} = service;
    // console.log(service.service);
    return (
        <div className='rounded-[18px] p-[25px] shadow-xl'>
            <h2 className='text-secondary font-bold text-[20px] mb-[10px]'>{name}</h2>
            <p className='mb-[10px] uppercase'>{
                slots.length
                ?<span>{slots[0]}</span>
                :<span className='text-red-500'>No slots available</span>
            }</p>
            <p className='uppercase mb-[10px]'>{slots.length} {slots.length>1? 'spaces':'space'} available</p>
            <label  className="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary" disabled={slots.length===0} for="booking-modal" onClick={()=>setTreatment(service)}>book appointments</label>
        </div>
    );
};

export default Service;