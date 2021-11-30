import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link } from "react-router-dom";

//# Components
import RouterSwitches from './RouterSwitches';


class NavRouter extends Component {
    render() {
        return (
            <Router>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/gallery">Gallery</Link></li>
                        {/* todo <li>RESUME</li>  ADD LINK ONLY TO ABOUT PAGE */}
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                    <RouterSwitches />

                </nav>
            </Router>
        );
    }
}





export default NavRouter;