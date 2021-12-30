import React from 'react';





//# Components
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ShowcaseSection from '../components/Showcase';
import ServicesSection from '../components/ServicesSection';
import ContactSection from '../components/ContactSection';
import GallerySearch from '../components/GallerySearch';
/*
    todo FINISH MENU AND HERO SECTION
    todo ADD the rest of the sections
    TODO ADD EXPRESSJS to run in server


*/

class GalleryPage extends React.Component{
    render(){
        return (
        <div className="App">
            <Header />
            <HeroSection />
            <GallerySearch />
            <ShowcaseSection />
            <ShowcaseSection />
            <ShowcaseSection />
            <ShowcaseSection />
            <ServicesSection />
            <ContactSection />
            <h1>REACT is working</h1>
        </div>
        );
    }
}

// function displayGallery() {
    
// }

export default GalleryPage;