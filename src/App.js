import React from 'react';
import {
    Routes,
    Route,
    Navigate
} from "react-router-dom";

//# PAGES
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import ResumePage from './pages/ResumePage';
import HomePage from './pages/HomePage';

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/404" element={<div>Page Not Found</div>} />
            <Route path="*" element={<Navigate replace to="/404" />} />
        </Routes>
    );
}