import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
    const { _id, name, slots } = treatment;
    const [user, loading, error] = useAuthState(auth);
    const formattedDate = format(date, 'PP')
    // console.log(treatment)
    const handleSubmit = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        const booking = {
            treatmentId:_id,
            treatment:name,
            date:formattedDate,
            slot,
            patient:user.email,
            patientName:user.displayName
        }

        fetch('http://localhost:5000/bookings',{
            method:'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.success){
                toast(`Appointment is set, ${formattedDate} at ${slot}`)
            }
            else{
                toast.error(`Already have an appointment on ${data.booking?.date} at ${data.booking?.slot}`)
            }
            refetch();
            setTreatment(null);
        });
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">{name}</h3>
                    <form onSubmit={handleSubmit} className='mt-[47px]'>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs mb-[15px]" />
                        <select name='slot' className="select select-bordered w-full max-w-xs mb-[15px]">
                            {
                                slots.map((slot, index)=><option key={index} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs mb-[15px]" />
                        <input type="email" name='email'  disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs mb-[15px]" />
                        <input type="number" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs mb-[15px]" />
                        <input type="submit" value="submit" className="btn w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;