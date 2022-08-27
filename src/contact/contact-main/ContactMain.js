import React from "react";
import './ContactMain.css';

class ContactMain extends React.Component {
    render() {
        return (
            <section className='contact-main-section'>
                <div className='contact-main-top'>
                    <div className='container-size'>
                        <div className='contact-inner-top'>
                            <div className='contact-top-list'>
                                <i class="fa fa-location-arrow"></i>
                                <h3>Location</h3>
                                <p>506, 5th Floor Fortune Aura, Bhanwar Kuwa, Indore, Madhya Pradesh 452001</p>
                            </div>
                            <div className='contact-top-list'>
                                <i class="fa fa-envelope-o"></i>
                                <h3>Mail</h3>
                                <p><a href="mailto:info@dreamhousemakerz.com">info@dreamhousemakerz.com</a></p>
                            </div>
                            <div className='contact-top-list'>
                                <i class="fa fa-phone"></i>
                                <h3>Phone</h3>
                                <p><a href="tel:+0731 6680333">+0731 6680333</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='contact-main-bottom'>
                    <div className='container-size'>
                        <div className='contact-inner-bottom'>
                            <div className='contact-form'>
                                <h1>Contact Us</h1>
                                <div className='contact-form-inner'>
                                    <form>
                                        <div className='contact-form-row1'>
                                            <p><input type="text" placeholder="Full Name" required="required" /></p>
                                            <p><input type="email" placeholder="Email" required /></p>
                                            <p><input type="text" placeholder="Phone" required /></p>
                                        </div>
                                        <div className='contact-form-row2'>
                                            <p><input type="text" placeholder="State" required /></p>
                                            <p><input type="text" placeholder="City" required /></p>
                                        </div>
                                        <div className='contact-form-row3'>
                                            <p><textarea placeholder="Requirement"></textarea></p>
                                            <p><input type="submit" value="Submit" /></p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className='contact-map'>
                                <div className="google-map-code">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.9708660673105!2d75.86295386836922!3d22.692128446120943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd6b06da5dc3%3A0xd628dd5836675c95!2sDream%20House%20Makerz-%20Best%20Architect%20in%20Indore%20%7C%20Interior%20Designer%20in%20Indore!5e0!3m2!1sen!2sin!4v1658470449258!5m2!1sen!2sin" width="100%" height="415" frameborder="0" style={{ border: 0 }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default ContactMain;