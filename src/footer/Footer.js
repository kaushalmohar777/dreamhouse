import './Footer.css';
import React from 'react';
import Map from "../assets/map.png";
import Phone from "../assets/phone-icon.png";
import Email from "../assets/email-icon.png";
import { Link } from "react-router-dom";

class Footer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        fetch('https://dreamhousemakerz.com/production/index.php/wp-json/wp/v2/header_footer/107/')
            .then(result => result.json())
            .then(json => {
                this.setState({
                    items: json,
                    isLoaded: true
                })
            });
    }

    render() {
        var { isLoaded, items } = this.state;

        if (!isLoaded) {
            return (
                <div className='loader'></div>
            );
        } else {
            return (
                <footer className='footer-main-section'>
                    <div className="container-size">
                        <div className='footer-inner'>
                            <div className='footer-col about-col'>
                                <h3>{items.acf.about_us.title}</h3>
                                <p>{items.acf.about_us.description}</p>
                                <div className='ssl-secured'>
                                    <img src={items.acf.about_us.secured_image} />
                                </div>
                            </div>
                            <div className='footer-col quick-links-col'>
                                <h3>Quick Links</h3>
                                <ul>
                                    <li><Link to="/demosite">Home</Link></li>
                                    <li><Link to="/about-us">About Us</Link></li>
                                    <li><Link to="/services">Services</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                    <li><Link to="privacy-policy">Privacy & Policy</Link></li>
                                    <li><Link to="terms-conditions">Terms & Conditions</Link></li>
                                </ul>
                            </div>
                            <div className='footer-col services-col'>
                                <h3>Services</h3>
                                <ul>
                                    <li><Link to="/elevation">Elevation Design</Link></li>
                                    <li><Link to="/services/under-1000-sqaure-feet-plan">1000 Sqfeet House Design</Link></li>
                                    <li><Link to="/services/1000-1200-sqaure-feet-plan">1200 Sqfeet House Design</Link></li>
                                    <li><Link to="/VillageSq">Village House Design</Link></li>
                                </ul>
                            </div>
                            <div className='footer-col social-col'>
                                <h3>Social</h3>
                                <ul>
                                    <li><a href={items.acf.social.facebook_url} target='_blank'><i className="fa fa-facebook"></i> {items.acf.social.facebook_title}</a></li>
                                    <li><a href={items.acf.social.instagram_url} target='_blank'><i className="fa fa-instagram"></i> {items.acf.social.instagram_title}</a></li>
                                    <li><a href={items.acf.social.youtube_url} target='_blank'><i className="fa fa-youtube-play"></i> {items.acf.social.youtube_title}</a></li>
                                </ul>
                                <h3>Connect With Us</h3>
                                <p><img src={Map} /> {items.acf.connect_with_us.address}</p>
                                <p><Link to={`mailto:${items.acf.connect_with_us.phone}`}><img src={Phone} /> +{items.acf.connect_with_us.phone}</Link></p>
                                <p><Link to={`mailto:${items.acf.connect_with_us.email_id}`}><img src={Email} /> {items.acf.connect_with_us.email_id}</Link></p>
                            </div>
                        </div>
                    </div>
                    <div className='copy-right-sec'>
                        <p>{items.acf.copyright} </p>
                    </div>
                </footer>
            );
        }
    }
}


export default Footer;