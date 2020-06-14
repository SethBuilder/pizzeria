import React from 'react';
import MenuItem from './MenuItem';

function Menu({ pizzas, setCartItems }) {
    return (
        <div className="bg-gray-400 px-16 min-h-screen flex flex-col justify-center">
            <h2 className="container  my-6 mx-auto content-center text-center text-black text-2xl md:text-3xl">
                <span className="font-bold">Some Of Our <strong>Delicious</strong> Pizzas</span>
            </h2>
            <div className="flex justify-center lg:justify-between flex-wrap">
                {pizzas.map((pizza) => {
                    return <MenuItem setCartItems={setCartItems} key={pizza.slug} pizza={pizza} />
                })}
            </div>
        </div>

    );
}

export default Menu;
