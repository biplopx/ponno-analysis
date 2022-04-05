import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='bg-gray-800 w-full text-white p-4 font-mono'>
      <div className="container mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-center md:flex-wrap justify-between items-center">
        <h1 className='basis-1/4 text-2xl lg:text-2xl md:text-2xl'>Ponno Analysis</h1>
        <ul className='flex justify-end list-none text-base basis-3/4 mt-6 lg:mt-0'>
          <li> <Link className='transition duration-300 hover:bg-gray-700 p-4 rounded mr-3' to="/home">Home</Link> </li >
          <li> <Link className='transition duration-300 hover:bg-gray-700 p-4 rounded mr-3' to="/reviews">Reviews</Link> </li>
          <li> <Link className='transition duration-300 hover:bg-gray-700 p-4 rounded mr-3' to="/dashboard">Dashboard</Link> </li>
          <li> <Link className='transition duration-300 hover:bg-gray-700 p-4 rounded mr-3' to="/blogs">Blogs</Link> </li>
          <li> <Link className='transition duration-300 hover:bg-gray-700 p-4 rounded' to="/about">About</Link> </li>
        </ul >
      </div >
    </nav >
  );
};

export default Header;