import React, { Component } from 'react';
import { BrowserRouter as Switch, Route } from "react-router-dom";

//# Pages
import HomePage from './../../../pages/HomePage';
import ServicesPage from './../../../pages/ServicesPage';
import GalleryPage from './../../../pages/GalleryPage';
// import ResumePage from './../../../pages/ResumePage';
import ContactPage from './../../../pages/ContactPage';

class RouterSwitches extends React.Component{
    return() {
        
        <Switch>
            <Route path="/pages/services" >
                <ServicesPage />
            </Route>
            <Route path="/pages/gallery">
                <GalleryPage />
            </Route>
            <Route path="/pages/about">
                <AboutPage />
            </Route>
            <Route path="/pages/contact">
                <ContactPage />
            </Route>
            {/* <Route path="/pages/resume">
                <ResumePage />
            </Route> */}
            <Route path="/">   
                <HomePage />
            </Route>
        </Switch>
        
    }
}
export default RouterSwitches;