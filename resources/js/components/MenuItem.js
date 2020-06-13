import React from 'react';

function MenuItem() {
    return (
        <div className="max-w-sm mb-8">
            <div className="relative pb-5/6 h-64">
                <img className="absolute h-full w-full object-cover rounded-lg shadow-md" src="https://media-cdn.tripadvisor.com/media/photo-s/18/1a/d5/1e/casteloes.jpg"
                    alt="TO DO" />
            </div>
            <div className="relative px-4 -mt-16">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="flex items-baseline">
                        <span className="inline-block bg-teal-200 text-teal-800 text-xs px-2 rounded-full uppercase font-semibold tracking-wide">Vegan</span>
                        <span className="inline-block bg-teal-200 text-teal-800 text-xs px-2 rounded-full uppercase font-semibold tracking-wide">Gluten Free</span>
                    </div>
                    <h4 className="mt-4 font-semibold text-lg leading-tight truncate">$50 | Veggie Pizza</h4>
                    <div className="mt-4 text-gray-600 text-sm"> Tropical Hawaiian Complete Juicy Beef, Mozzarella cheese and Juicy pineapples.</div>

                    <div className="mt-6 flex items-center justify-center">
                        <button className="shadow-lg  bg-cta-red hover:bg-pizza-red text-white uppercase tracking-wide w-40 py-1 px-3 text-white rounded text-xl">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MenuItem;
