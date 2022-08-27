import React from "react";
import ThreeDBanner from "./Three-banner/ThreeDBanner";
import ThreeDSection from "./Threedsection/ThreeDSection";
import ThreeDElevation from "./Elevation/ThreeDElevation";
import Counter from "./counter-box/Counter";

export default function ThreeDPage() {
    return (
        <>
            <ThreeDBanner />
            <ThreeDSection />
            <ThreeDElevation />
            <Counter />
            
        </>
    );
}