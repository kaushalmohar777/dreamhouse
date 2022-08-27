import React from 'react';
import './HundredBanner.css';
import BannerImg from "./images/about-banner.jpg";


class HundredBanner extends React.Component {
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
export default HundredBanner;