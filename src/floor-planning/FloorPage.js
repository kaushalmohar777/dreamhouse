import React from "react";
import FloorBanner from "./Floor-banner/FloorBanner";
import FloorSection from "./floor-plan-section/FloorSection";
import WhyToGo from "./why-to-go/WhyToGo";
import Counter from "./counter-box/Counter";


export default function FloorPage() {
    return (
        <>
            <FloorBanner />
            <FloorSection />
            <WhyToGo />
            <Counter />
       </>
    );
}