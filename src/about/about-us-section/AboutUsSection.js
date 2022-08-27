import React from 'react';
import './AboutUsSection.css'
import aboutImg from "./images/about.jpg";

class AboutUsSection extends React.Component {
    render() {
        return (
            <section className='about-us-section'>
                <div className='container-size'>
                    <div className='about-us-inner'>
                        <div className='about-us-left'>
                            <h1>ABOUT US</h1>
                            <p>Dream House Makerz is your ultimate space transformation partner with human-centered designs. Focusing on bringing visionary designs at affordable rates, Dream House Makerz gives you ‘Your Sapne ka Ghar’ in an effortless manner. Thus, Dream House Makerz redefines your homes with fine quality and fastest services.</p>
                            <p>With over 500+ happy and satisfied clients, we are delivering the comfortable and best possible residential as well as commercial solutions now to your place too. Our top-notch architects team up to deliver you world-class designs that are both environmentally sensitive and Vastu appropriate. Most importantly, we serve the needs of our designs in our clients budget.</p>
                        </div>
                        <div className='about-us-right'>
                            <img src={aboutImg} />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default AboutUsSection;