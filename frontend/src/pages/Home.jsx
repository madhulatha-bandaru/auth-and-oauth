import React from 'react';

export default function Home() {

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='bg-white shadow-lg rounded-2xl p-8 max-w-3xl text-center'>
        <h1 className='text-4xl font-extrabold text-slate-800 mb-4'>
          Welcome to My Auth App! 
        </h1>
        <p className='text-lg text-slate-700 mb-6'>
          A secure and modern authentication system built with the <span className='font-semibold'>MERN stack</span>. Users can sign up, log in, and access protected routes effortlessly.
        </p>

        <div className='bg-gray-50 p-6 rounded-xl shadow-inner'>
          <h2 className='text-2xl font-semibold text-slate-800 mb-3'>
          🔐 Features 
          </h2>
          <ul className='flex flex-col items-center text-slate-700 space-y-2 text-left inline-block'>
            <li> Secure user authentication with JWT</li>
            <li> Encrypted password storage for safety</li>
            <li> Seamless navigation with React Router</li>
            <li> RESTful APIs built with Express & Node.js</li>
            <li> MongoDB integration for efficient data storage</li>
          </ul>
        </div>

        <p className='mt-6 text-slate-600'>
        The front-end of the application is built with React and uses React
        Router for client-side routing. The back-end is built with Node.js and
        Express, and uses MongoDB as the database. Authentication is implemented
        using JSON Web Tokens (JWT).
        <br/>
          Built with performance and security in mind, this app serves as a robust starting point for authentication-based web applications.
        </p>
        

      </div>
    </div>
  );
}
