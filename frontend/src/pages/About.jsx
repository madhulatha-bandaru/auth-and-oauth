import React from 'react';

export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100 px-6 py-12'>
      <div className='bg-white shadow-lg rounded-2xl p-8 max-w-3xl text-center'>
        <h1 className='text-4xl font-extrabold text-slate-800 mb-4'>About This Auth App</h1>
        <p className='text-lg text-slate-700 mb-6'>
          This is a  full-stack authentication system  built using the  MERN stack  (MongoDB, Express, React, Node.js). It provides a  secure and efficient  way for users to  sign up, log in, and manage their accounts.
        </p>

        <div className='bg-gray-50 p-6 rounded-xl shadow-inner'>
          <h2 className='text-2xl font-semibold text-slate-800 mb-3'>
            🔐 Features & Technologies 🔐
          </h2>
          <ul className='flex flex-col items-center text-slate-700 space-y-2 text-left inline-block'>
            <li>  JWT-based Authentication for secure login</li>
            <li>  Role-based Access Control (RBAC) for user permissions</li>
            <li>  MongoDB for Data Storage with Mongoose ODM</li>
            <li>  React Router for seamless navigation</li>
            <li>  Express & Node.js  for backend APIs</li>
            <li>  Tailwind CSS for a clean and modern UI</li>
          </ul>
        </div>

        <p className='mt-6 text-slate-600'>
          Whether you're building a SaaS application, a personal project, or a startup, this app provides a solid foundation for secure authentication.
        </p>
      </div>
    </div>
  );
}
