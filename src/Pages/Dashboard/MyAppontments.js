import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyAppontments = () => {
    const [appointments, setAppointments] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(()=>{
        if(user){
            fetch(`http://localhost:5000/bookings?patient=${user.email}`, {
              method: 'GET',
              headers: {
                'authorization' : `Bearer ${localStorage.getItem('accessToken')}`
              }
            })
            .then(res=>{
             if (res.status===403 || res.status===401) {
               signOut(auth);
               localStorage.removeItem('accessToken');
               navigate('/');
             }
             return res.json()
            })
            .then(data=>{
              setAppointments(data)
            });
        }
    },[])
    return (
        <div>
            <h2>My appointments {appointments.length}</h2>
            <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>NAME</th>
        <th>SERVICE</th>
        <th>TIME</th>
      </tr>
    </thead>
    <tbody>
      {
          appointments.map((a, index)=><tr key={a._id}>
            <th>{index+1}</th>
            <td>{a.patientName}</td>
            <td>{a.treatment}</td>
            <td>{a.slot}</td>
          </tr>)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyAppontments;