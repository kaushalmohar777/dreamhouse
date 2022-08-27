import React from "react";
import "./Services.css";
import ServicesBanner from "./services-banner/ServicesBanner";
import serviceImg1 from "./images/Appartment.png";
import serviceImg2 from "./images/Bunglow.png";
import serviceImg3 from "./images/FarmHouse.png";
import serviceImg4 from "./images/Interior.png";

export default function Services() {
    return (
        <>
            <ServicesBanner />
           
            <div className="services-list-sec">
                <h1 className="Services-title">Services</h1>
                <div className="container-size">
                    <div className="services-list-inner">
                        <div className="services-list-box">
                            <div className="services-list-img"><img src={serviceImg1} /></div>
                            <h3>Floor Planning</h3>
                        </div>

                        <div className="services-list-box">
                            <div className="services-list-img"><img src={serviceImg1} /></div>
                            <h3>Exterior Elevation</h3>
                        </div>
                        <div className="services-list-box">
                            <div className="services-list-img"><img src={serviceImg4} /></div>
                            <h3>Interior Design</h3>
                        </div>
                        <div className="services-list-box">
                            <div className="services-list-img"><img src={serviceImg3} /></div>
                            <h3>Farm House Design</h3>
                        </div>
                        <div className="services-list-box">
                            <div className="services-list-img"><img src={serviceImg1} /></div>
                            <h3>Apartment Design</h3>
                        </div>
                        <div className="services-list-box">
                            <div className="services-list-img"><img src={serviceImg2} /></div>
                            <h3>Bungalow</h3>
                        </div>
                        <div className="services-list-box">
                            <div className="services-list-img"><img src={serviceImg4} /></div>
                            <h3>Small House</h3>
                        </div>
                        <div className="services-list-box">
                            <div className="services-list-img"><img src={serviceImg1} /></div>
                            <h3>Shop With House</h3>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
}