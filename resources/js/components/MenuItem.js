import React, { useState } from 'react';

function MenuItem({ pizza, setCartItems }) {
    // const [addedToCart, setAddedToCart] = useState(false);
    const [buttonText, setButtonText] = useState('add to cart');

    const handleClick = () => {

        setCartItems(prevItems => [...prevItems, pizza]);
        setButtonText('add again')
    }
    return (
        <div className="max-w-sm mb-8">
            <div className="relative pb-5/6 h-64">
                <img className="absolute h-full w-full object-cover rounded-lg shadow-md" src={pizza.image}
                    alt="TO DO" />
            </div>
            <div className="relative px-4 -mt-2">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="flex items-baseline">
                        <span className="inline-block bg-teal-200 text-teal-800 text-xs px-2 rounded-full uppercase font-semibold tracking-wide">Vegan</span>
                        <span className="inline-block bg-teal-200 text-teal-800 text-xs px-2 rounded-full uppercase font-semibold tracking-wide">Gluten Free</span>
                    </div>
                    <h4 className="mt-4 font-semibold text-lg leading-tight truncate">{pizza.price} &euro; | {pizza.name}</h4>
                    <div className="mt-4 text-gray-600 text-sm"> {pizza.description} </div>

                    <div className="mt-6 flex items-center justify-center">
                        <button onClick={handleClick} className="shadow-lg  bg-cta-red hover:bg-pizza-red text-white uppercase tracking-wide w-40 py-1 px-3 text-white rounded text-xl">{buttonText}</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MenuItem;
