import React from 'react';
import Lottie from "lottie-react";
import clothe from '../../assets/108631-aloha-clothes.json';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='min-h-[calc(100vh-112px)] flex justify-center items-center my-container'>
            <div className='flex justify-center items-center gap-10'>
                <div>
                    <h1 className='text-4xl font-bold tracking-wide leading-relaxed text-purple-900'>Dress like you're already famous.</h1>
                    <h1 className='text-xl font-semibold my-4 text-gray-700'>Trendy !s the last stage before tacky.</h1>
                    <Link to='/shop'><button className='btn-shop'>Shop Now</button></Link>
                </div>
                <div>
                    <Lottie animationData={clothe} loop={true}></Lottie>
                </div>
            </div>
        </div>
    );
};

export default Home;