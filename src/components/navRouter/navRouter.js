import React, {Component} from 'react';
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";




//# Pages
import HomePage from './../../../pages/HomePage';
import ServicesPage from './../../../pages/ServicesPage';
import GalleryPage from './../../../pages/GalleryPage';
import ResumePage from './../../../pages/ResumePage';
import ContactPage from './../../../pages/ContactPage';
import AboutPage from './../../../pages/AboutPage';

class NavRouter extends React.Component {
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
                </nav>
                <Routes>
                        <Route path="/services" element={<ServicesPage />} />

                        <Route path="/gallery" element={<GalleryPage />} />

                        <Route path="/about" element={<AboutPage />} />

                        <Route path="/contact" element={<ContactPage />} />

                        <Route path="/resume" element={<ResumePage />} />

                        <Route path="/" element={<HomePage />} />   

                </Routes>
            </Router>
        );
    }
}





export default NavRouter;