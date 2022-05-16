import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const { name, slots } = treatment;
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
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">{name}</h3>
                    <form onSubmit={handleSubmit} className='mt-[47px]'>
                        <input type="text" disabled value={format(date, 'PP')} class="input input-bordered w-full max-w-xs mb-[15px]" />
                        <select name='slot' class="select select-bordered w-full max-w-xs mb-[15px]">
                            {
                                slots.map(slot=><option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' placeholder="Full Name" class="input input-bordered w-full max-w-xs mb-[15px]" />
                        <input type="number" name='phone' placeholder="Phone Number" class="input input-bordered w-full max-w-xs mb-[15px]" />
                        <input type="email" name='email' placeholder="Email" class="input input-bordered w-full max-w-xs mb-[15px]" />
                        <input type="submit" value="submit" class="btn w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;