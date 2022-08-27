import React from 'react';
import './ServicesBanner.css';
import BannerImg from "./images/about-banner.jpg";


class ServicesBanner extends React.Component {
    render() {
        return (
            <section className='services-banner-main'>
                <div className='services-banner-sec'>
                    <img src={BannerImg} />
                </div>
            </section>
        );
    }
}
export default ServicesBanner;