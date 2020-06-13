import React from 'react';
import ReactDOM from 'react-dom';
import Hero from './Hero';


function App() {
    return (
        <div>
            <Hero />
        </div>
    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
