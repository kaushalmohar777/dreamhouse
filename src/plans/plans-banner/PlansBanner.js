import React from 'react';
import './PlansBanner.css';
import BannerImg from "./images/about-banner.jpg";




class PlansBanner extends React.Component {
    render() {
        return (
            <section className='about-banner-main'>
                <div className='about-banner-sec'>
                <img src={BannerImg} />
                </div>
            </section>
        );
    }
}
export default PlansBanner;