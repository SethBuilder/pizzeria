import Home from './Home';
import Confirmation from './Confirmation';
import Cart from './checkout/Cart';
import Nav from './Nav';
import Footer from './Footer';
import React, { useState } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom'

function App() {
    const [cartItems, setCartItems] = useState([]);
    const [orderStatus, setOrderStatus] = useState({ processed: false, success: null, });;

    return (
        <>
            <Nav cartItems={cartItems} path={useLocation().pathname} />
            <Switch>
                <Route path="/" exact render={() => <Home cartItems={cartItems} setCartItems={setCartItems} />} />

                <Route path="/cart" exact render={() => orderStatus.processed ? <Confirmation orderStatus={orderStatus} />
                    : <Cart setOrderStatus={setOrderStatus} cartItems={cartItems} />} />

                {/* <Route path="/" render={() => <div><h1><small>404... </small>That's all we know</h1></div>} /> */}
            </Switch>
            <Footer />
        </>
    );
}

export default App;
