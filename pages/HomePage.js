import React from 'react';

// Components
import Header from './../src/components/Header';
import HeroSection from './../src/components/HeroSection';
import ShowcaseSection from './../src/components/Showcase';
import ServicesSection from './../src/components/ServicesSection';
import ContactSection from './../src/components/ContactSection';

/*

    TODO LIST
        01 FINISH MENU AND HERO SECTION
        02 ADD the rest of the sections
        03 ADD EXPRESSJS to run in server


*/



class HomePage extends React.Component {
    render() {
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
    }
} 
export default HomePage;