import React from 'react';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import HappinessSection from '../HappinessSection/HappinessSection';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Teams from '../Teams/Teams';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Header />
            <Services />
            <Teams />
            <Testimonials />
            <HappinessSection />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;