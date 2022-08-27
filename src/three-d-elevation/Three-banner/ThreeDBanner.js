import React from 'react';
import './ThreeDBanner.css';
import BannerImg from "./images/about-banner.jpg";


class ThreeDPage extends React.Component {
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
export default ThreeDPage;

