import React from 'react';
import ReactDOM from 'react-dom';

import './app.scss';
import Alert from "./components/Alert";
import Button from "./components/Button";

const App = (...rest) => {
    return (
        <div>

            <h1>hello</h1>
            <Alert/>
            <Button/>
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));