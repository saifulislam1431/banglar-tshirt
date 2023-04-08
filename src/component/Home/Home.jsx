import React from 'react';
import Lottie from "lottie-react";
import clothe from '../../assets/108631-aloha-clothes.json';

const Home = () => {
    return (
        <div className='flex justify-center items-center mt-10'>
            <div className='flex'>
                <div>
                   <h1>Trendy is the last stage before tacky.</h1>
                </div>
                <div>
                    <Lottie animationData={clothe} loop={true}></Lottie>
                </div>
            </div>
        </div>
    );
};

export default Home;