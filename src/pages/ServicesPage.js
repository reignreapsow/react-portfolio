import React from 'react';

//# Components
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ShowcaseSection from '../components/Showcase';
import ServicesSection from '../components/ServicesSection';
import ContactSection from '../components/ContactSection';


export default function ServicesPage(){
        return (
            <div className="App">
                <Header />
                <HeroSection />
                <ServicesSection />
                <ShowcaseSection />
                <ContactSection />
                <h1>REACT is working</h1>
            </div>  
        );
//     }
};

