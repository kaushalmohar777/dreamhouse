import React from 'react';
import './FloorBanner.css';
import BannerImg from "./images/about-banner.jpg";


class FloorPage extends React.Component {
    render() {
        return (
            <section className='floor-banner-main'>
                <div className='floor-banner-sec'>
                    <img src={BannerImg} />
                </div>
            </section>
        );
    }
}
export default FloorPage;