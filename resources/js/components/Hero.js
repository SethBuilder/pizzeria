import React from 'react';
import Nav from './Nav';

function Hero() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', backgroundImage: `url('/images/bg.jpg')`, backgroundPosition: 'center' }}
            className="bg-cover h-screen relative">
            <div className="z-0 absolute h-full w-full" style={{ backgroundColor: 'rgba(58,30,18, 0.25)' }}></div>
            <div>
                <Nav />
            </div>

            <h1 className="container z-10 mt-16 mx-auto content-center text-center text-white text-3xl md:text-5xl"><span className="font-bold">Fresh, Delicious And Honest</span> <br />Food Served With Care</h1>
        </div>
    );
}

export default Hero;
