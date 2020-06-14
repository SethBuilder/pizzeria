import Home from './Home';
import Cart from './Cart';
import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom'

function App() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {

    }, [])

    return (
        <>
            <Switch>
                <Route path="/" exact render={() => <Home cartItems={cartItems} setCartItems={setCartItems} />} />
                <Route path="/cart" exact render={() => <Cart cartItems={cartItems}  />} />
                <Route path="/" render={() => <div>404</div>} />
            </Switch>
        </>
    );
}

export default App;
