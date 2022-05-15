import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';

const AvailableAppointments = ({date}) => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[])
    return (
        <div>
            <p className='text-secondary font-bold text-[20px]'>Available Appointments on {format(date, 'PP')}</p>
        </div>
    );
};

export default AvailableAppointments;