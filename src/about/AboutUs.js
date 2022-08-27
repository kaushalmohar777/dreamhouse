import React from "react";
import AboutBanner from "./about-banner/AboutBanner";
import AboutUsSection from "./about-us-section/AboutUsSection";
import HowWeWork from "./how-we-work/HowWeWork";
import WhyToGo from "./why-to-go/WhyToGo";


export default function AboutUs() {
    return (
        <>
            <AboutBanner />
            <AboutUsSection />
            <WhyToGo />
            <HowWeWork />
        </>
    );
}