import React from 'react';
import './VillageBanner.css';
import BannerImg from "./images/about-banner.jpg";


class VillageBanner extends React.Component {
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
export default VillageBanner;