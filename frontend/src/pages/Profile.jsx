import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import {app} from '../firebase'

import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  signOut,
} from '../redux/user/userSlice';

const Profile = () => {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({});
  const [updateSuccess, setUpdateSuccess] = useState(false);

  const { currentUser, loading, error } = useSelector((state) => state.user);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(updateUserFailure(data));
        return;
      }
      dispatch(updateUserSuccess(data));
      setUpdateSuccess(true);
    } catch (error) {
      dispatch(updateUserFailure(error));
    }
  };

  const handleDeleteAccount = async () => {
    try {
      dispatch(deleteUserStart());
      const res = await fetch(`/api/user/delete/${currentUser._id}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailure(data));
        return;
      }
      dispatch(deleteUserSuccess(data));
    } catch (error) {
      dispatch(deleteUserFailure(error));
    }
  };

  const handleSignOut = async () => {
    try {
      await fetch('/api/auth/signout');
      dispatch(signOut())
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='p-3 max-w-lg mx-auto'>

      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>

      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>

        <img src ={formData.profilePicture || currentUser.profilePicture} alt='profile'
        className='h-24 w-24 self-center cursor-pointer rounded-full object-cover mt-2'
        />

        <input defaultValue = { currentUser.username} type="text" id='username' placeholder='Username' 
        className='bg-slate-100 rounded-lg p-3' onChange={handleChange}/>

        <input defaultValue = { currentUser.email } type="email" id='email' placeholder='Email' 
        className='bg-slate-100 rounded-lg p-3' onChange={handleChange}/>

        <input type="password" id='password' placeholder='Password' 
        className='bg-slate-100 rounded-lg p-3' onChange={handleChange}/>

        <button className='bg-slate-700 text-white p-3 rounded-lg hover:opacity-95 disabled:opacity-80'>
          {loading ? 'Loading...' : 'Update Account'}
        </button>

      </form>

      <div className='flex justify-between mt-5'>
        <span
          onClick={handleDeleteAccount}
          className='text-red-700 cursor-pointer'
        >
          Delete Account
        </span>
        <span onClick={handleSignOut} className='text-red-700 cursor-pointer'>
          Sign Out
        </span>
      </div>
      <p className='text-red-700 mt-5'>{error && 'Something went wrong!'}</p>
      <p className='text-green-700 mt-5'>
        {updateSuccess && 'Account updated successfully!'}
      </p>

    </div>
  )
}

export default Profile
