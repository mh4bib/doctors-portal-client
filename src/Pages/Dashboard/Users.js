import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import LoadingSpinner from '../Shared/LoadingSpinner';


const Users = () => {
  const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/users', {
    method: 'GET',
    headers: {
      authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
  }).then(res => res.json()))
  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  const makeAdmin = (email) =>{
    fetch(`http://localhost:5000/user/admin/${email}`,{
      method: 'PUT',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
    .then(res=>{
      if(res.status===403){
        toast.error('You have no right to modify users')
      }
      return res.json()})
    .then(data=>{
      if (data.modifiedCount>0) {
        console.log(data);
        refetch();
        toast.success('making admin successful')
      }
    })
  }
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">

        <thead>
          <tr>
            <th></th>
            <th>Email</th>
            <th>Admin</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user, index) => <tr key={index}>
              <th>{index + 1}</th>
              <td>{user.email}</td>
              <th>{user.role!=='admin' && <button onClick={()=>makeAdmin(user.email)} className='btn btn-sm'>Make Admin</button>}</th>
              <th><button className='btn btn-sm'>Remove User</button></th>
            </tr>)
          }

        </tbody>
      </table>
    </div>
  );
};

export default Users;