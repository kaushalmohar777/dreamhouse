import React from 'react';
import './ContactBanner.css';
import BannerImg from "./images/contact-banner.jpg";


class ContactBanner extends React.Component {
    render() {
        return (
            <section className='contact-banner-main'>
                <div className='contact-banner-sec'>
                    <img src={BannerImg} />
                </div>
            </section>
        );
    }
}
export default ContactBanner;