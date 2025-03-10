import React from 'react'
import { useSelector} from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className='bg-slate-200'>
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to='/'>
        <h1 className='font-bold'>Auth App</h1>
        </Link>
        <ul className='flex gap-4'>
          <Link to='/'>
          <li className='hover:text-red-700'>Home</li>
          </Link>
          <Link to='/about'>
          <li className='hover:text-red-700'>About</li>
          </Link>
          <Link to='/profile'>
            { currentUser ? (
              <img src={currentUser.profilePicture}
              alt = 'profile' className = 'h-7 w-7 rounded-full object-cover ' />
            ) : (
              <li>
                <button onClick={() => navigate('/sign-in')}className=' px-3 py-0.3 bg-red-700 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-red-600 transition-all duration-300'>
          Sign In
        </button>
              </li>
            )}
          
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default Header