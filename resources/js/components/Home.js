import Hero from './Hero';
import Menu from './Menu';
import React, { useState, useEffect } from 'react';
import api from '../api/menu';

function App({ cartItems, setCartItems }) {
    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        fetchFromAPI()
    }, [])

    async function fetchFromAPI() {
        const { data: pizzas } = await api.get("")
        setPizzas(pizzas.data)
    }
    return (
        <div>
            <Hero cartItems={cartItems} />
            <Menu setCartItems={setCartItems} pizzas={pizzas} />
        </div>
    );
}

export default App;
