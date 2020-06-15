import React from 'react';
import Nav from './Nav';

function Hero({ cartItems }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', backgroundImage: `url('/images/bg.jpg')`, backgroundPosition: 'center' }}
            className="bg-cover h-screen relative">
            <div className="z-0 absolute h-full w-full" style={{ backgroundColor: 'rgba(58,30,18, 0.29)' }}></div>
            <h1 className="container z-10 mt-32 mx-auto content-center text-center text-white text-3xl md:text-5xl">
                <span className="font-bold">Fresh, Delicious And Honest</span> <br />Food Served With Care
            </h1>
            <button
                className="z-10 bg-cta-red container mx-auto py-4 px-3 m-6 font-semibold uppercase tracking-wide w-40 text-white hover:text-cta-red rounded-sm hover:bg-white text-xl">
                order now
            </button>
        </div>
    );
}

export default Hero;
