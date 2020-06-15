import React from 'react';

function Hero({ orderStatus }) {
    let message
    if (orderStatus.processed && orderStatus.success) {
        message = (
            <h1 className="container z-10 mt-32 mx-auto content-center text-center text-white text-3xl md:text-5xl">
                <span className="font-bold">Confirmed</span> <br />Your pizza will arraive in 45 minutes.
            </h1>)
    } else {
        message = (
            <h1 className="container z-10 mt-32 mx-auto content-center text-center text-white text-3xl md:text-5xl">
                <span className="font-bold">Order is unsuccessful</span> <br />Our customer happiness manager will check just now.
            </h1>)
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'column', backgroundImage: `url('/images/bg.jpg')`, backgroundPosition: 'center' }}
            className="bg-cover h-screen relative">
            <div className="z-0 absolute h-full w-full" style={{ backgroundColor: 'rgba(58,30,18, 0.29)' }}></div>
            {message}
            {orderStatus.success && <a href="/#menu"
                className="z-10 bg-cta-red container mx-auto py-4 px-3 m-6 font-semibold uppercase tracking-wide text-center w-48 text-white hover:text-cta-red rounded-sm hover:bg-white text-xl">
                order again
            </a>}
        </div>
    );
}

export default Hero;
