import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer';

export default function Home(){
    return(
        <>
            <HeroSection />
            <Cards />
            <Footer />
        </>
    )
}