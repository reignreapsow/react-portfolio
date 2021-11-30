import React from 'react';

// Components
import Header from './../src/components/Header';
import HeroSection from './../src/components/HeroSection';
import ShowcaseSection from './../src/components/Showcase';
import ServicesSection from './../src/components/ServicesSection';
import ContactSection from './../src/components/ContactSection';

/*




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