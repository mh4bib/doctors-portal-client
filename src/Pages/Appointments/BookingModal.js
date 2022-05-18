import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const { name, slots } = treatment;
    const [user, loading, error] = useAuthState(auth);
    // console.log(treatment)
    const handleSubmit = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(slot);
        setTreatment(null);
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