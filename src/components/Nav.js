import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";

//# Components


class NavRouter extends Component {
    render() {
        return (
            
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    {/* todo <li>RESUME</li>  ADD LINK ONLY TO ABOUT PAGE */}
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>                
            </nav>
            
        );
    }
}





export default NavRouter;