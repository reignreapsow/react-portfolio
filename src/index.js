import React from 'react';
import { render } from "react-dom";
import {
    BrowserRouter    
} from "react-router-dom";
import "./scss/App.scss";
<<<<<<< HEAD
import HomePage from '../pages/HomePage';
// import { render } from 'react-dom';
=======
import App from './App';
>>>>>>> navRouter




const rootElement = document.getElementById("root");

<<<<<<< HEAD





ReactDOM.render(<HomePage />, document.getElementById('root'));

// const rootElement = document.getElementById('root');
// render(<HomePage />, rootElement);
=======
render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    rootElement
);
>>>>>>> navRouter
