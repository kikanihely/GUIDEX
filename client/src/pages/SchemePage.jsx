
import Navbar from '../components/Navbar';
import React from "react";
import ThreeButtons from '../components/ThreeButtons';
import YouTubeSlider from '../components/YouTubeSlider';
import AboutScheme from '../components/AboutScheme';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SchemePage = () => {
    return (
        <>
        <Navbar />
            <ThreeButtons />
            <YouTubeSlider />
            <AboutScheme />
            <FAQ />
            <Footer />
        </>
    );
};

export default SchemePage;
