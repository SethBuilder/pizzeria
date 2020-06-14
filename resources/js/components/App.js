import ReactDOM from 'react-dom';
import Hero from './Hero';
import Menu from './Menu';
import React, { useState, useEffect } from 'react';
import api from '../api/menu';

function App() {
    const [pizzas, setPizzas] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    useEffect(() => {
        fetchFromAPI()
    }, [cartItems])
    async function fetchFromAPI() {
        let { data: pizzas } = await api.get("", {
            params: {
                q: ''
            }
        })
        console.log(pizzas);
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

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
