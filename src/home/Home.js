import React from "react";
import HomeBanner from "./homebanner/HomeBanner";
import HomeSectionTwo from "./home-section-two/HomeSectionTwo";
import HowItWorks from "./how-it-works/HowItWorks";
import Categories from "./categories/Categories";
import CompleteCustomized from "./complete-customized/CompleteCustomized";
import InteriorDesign from "./interior-design/InteriorDesign";
import Interior from "./Interior/Interior";
import ProjectCompleted from "./project-completed/ProjectCompleted";
import WhoWeAre from "./who-we-are/WhoWeAre";
import ClientSays from "./client-says/ClientSays";
import GetInTouch from "./get-in-touch/GetInTouch";


export default function Home() {
        return (
            <>
                <HomeBanner />
                <HomeSectionTwo />
                <HowItWorks />
                <Categories />
                <CompleteCustomized />
                <InteriorDesign />
                <Interior />
                <ProjectCompleted />
                <WhoWeAre />
                <ClientSays />
                <GetInTouch />
            </>
        );
}