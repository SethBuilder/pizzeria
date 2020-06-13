import React from 'react';
import ReactDOM from 'react-dom';
import Hero from './Hero';
import Menu from './Menu';


function App() {
    return (
        <div>
            <Hero />
            <Menu />
        </div>
    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
