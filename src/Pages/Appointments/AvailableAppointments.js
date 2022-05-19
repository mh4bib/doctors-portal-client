import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import LoadingSpinner from '../Shared/LoadingSpinner';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointments = ({date}) => {
    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    const formattedDate = format(date, 'PP')

    const {data: services, isLoading, refetch} = useQuery(['available', formattedDate], ()=>fetch(`http://localhost:5000/available?date=${formattedDate}`)
    .then(res=>res.json())
    )

    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    // useEffect(()=>{
    //     fetch(`http://localhost:5000/available?date=${formattedDate}`)
    //     .then(res=>res.json())
    //     .then(data=>setServices(data));
    // },[formattedDate])
    return (
        <div>
            <p className='text-secondary text-[24px] pt-[60px]'>Available Appointments on {format(date, 'PP')}</p>
            <div className='card bg-base-100 grid grid-cols-1 md:grid-cols-3 gap-[34px] py-[60px] md:px-8 px-4'>
                {
                    services.map(service=><Service
                    key={service._id}
                    service={service}
                    setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {treatment && <BookingModal 
            date={date} 
            treatment={treatment} 
            setTreatment={setTreatment}
            refetch={refetch}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppointments;