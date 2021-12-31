import React from 'react';
import { render } from "react-dom";
import {
    BrowserRouter    
} from "react-router-dom";
import "./server/config.ts"

import "./scss/App.scss";
import App from './App';




const rootElement = document.getElementById("root");

render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    rootElement
);