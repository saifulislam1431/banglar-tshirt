import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import Lottie from "lottie-react";
import logo from "../../assets/132919-clothes.json"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className='flex justify-between items-center px-14'>
            <div className='logo'>
                {/* <h1 className='text-3xl font-bold text-purple-800'>T-Hub</h1> */}
                <Lottie className='h-28 w-28' animationData={logo} loop={true}></Lottie>
            </div>
            <ul className='hidden lg:flex text-lg font-medium'>
                <li className='ml-5'>
                    <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : 'default')}>Home</NavLink>
                </li>
                <li className='ml-5'>
                    <NavLink to='/shop' className={({ isActive }) => (isActive ? 'active' : 'default')}>Shop</NavLink>
                </li>
                <li className='ml-5'>
                    <NavLink to='/about' className={({ isActive }) => (isActive ? 'active' : 'default')}>About</NavLink>
                </li>
                <li className='ml-5'>
                    <NavLink to='/review' className={({ isActive }) => (isActive ? 'active' : 'default')}>Order Review</NavLink>
                </li>

            </ul>


            <div className='lg:hidden'>

                <button onClick={() => setIsOpen(!isOpen)}>
                    {
                        isOpen ? <XMarkIcon className="h-8 w-8 text-red-600" /> : <Bars3BottomRightIcon className="h-8 w-8 text-purple-700" />
                    }
                </button>
                <ul className={`text-lg font-medium flex flex-col justify-center items-center w-full absolute duration-300 bg-purple-100 py-10 z-40 ${isOpen ? 'right-0 top-16' : ' hidden'}`}>
            
                <li className='ml-5 mt-4'>
                    <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : 'default')}>Home</NavLink>
                </li>
                <li className='ml-5 mt-4'>
                    <NavLink to='/product' className={({ isActive }) => (isActive ? 'active' : 'default')}>Product</NavLink>
                </li>
                <li className='ml-5 mt-4'>
                    <NavLink to='/about' className={({ isActive }) => (isActive ? 'active' : 'default')}>About</NavLink>
                </li>
                <li className='ml-5 mt-4'>
                    <NavLink to='/review' className={({ isActive }) => (isActive ? 'active' : 'default')}>Order Review</NavLink>
                </li>
                

            </ul>
            </div>
        </nav>
    );
};

export default Header;