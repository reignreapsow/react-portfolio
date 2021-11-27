import React from 'react';




// Components
import Header from './../src/components/Header';
import HeroSection from './../src/components/HeroSection';
import ShowcaseSection from './../src/components/Showcase';
import ServicesSection from './../src/components/ServicesSection';
import ContactSection from './../src/components/ContactSection';
/*
    todo FINISH MENU AND HERO SECTION
    todo ADD the rest of the sections
    TODO ADD EXPRESSJS to run in server


*/

class ContactPage extends React.Component{
    render() {
        return (
            <div className="App">
                <Header />
                <HeroSection />
                <ServicesSection />
                <ShowcaseSection />
                <ContactSection />
            </div>
        );

    }
}

export default ContactPage;