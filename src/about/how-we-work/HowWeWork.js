import './HowWeWork.css';
import React from 'react';
import fillingImg from "./images/DesignBegins.png";
import consultantImg from "./images/Enquiry.png";
import ideationImg from "./images/Order.png";
import deliveringImg from "./images/Requirement.png";
import siteImg from "./images/Team.png";

class HowWeWork extends React.Component {
    render() {
        return (
            <section className='how-it-works-main'>
                <div className='how-it-works-top'>
                    <h3>HOW WE WORK?</h3>
                </div>
                <div className='container-size'>
                    <div className='how-it-works-bottom'>
                        <div className='how-it-works-steps how-we-works-steps'>
                            <h3>Filling the form</h3>
                            <div className='works-steps-img'><img src={fillingImg} /></div>
                            <p>The first and foremost step you need to do is to fill the mentioned form that sums up the different requirements of your perfect space.</p>
                        </div>

                        <div className='how-it-works-steps how-we-works-steps'>
                            <h3>Consultant Connection</h3>
                            <div className='works-steps-img'><img src={consultantImg} /></div>
                            <p>Thereafter, one of the Dream House Makerz consultant will connect with you. He/she will understand all your requirements, vision, and idea of how you want your space to look like and in what budget.</p>
                        </div>

                        <div className='how-it-works-steps how-we-works-steps'>
                            <h3>Ideation</h3>
                            <div className='works-steps-img'><img src={ideationImg} /></div>
                            <p>Once our consultant has gone through your requirements, your project will then be forwarded and headed by a senior architecture. Brainstorming and different discussions will be done to plan your ‘dream home’ effectively and efficiently. Thus, maps and drawings will be made in this process that will help in the further process.</p>
                        </div>

                        <div className='how-it-works-steps how-we-works-steps'>
                            <h3>Delivering the Designs</h3>
                            <div className='works-steps-img'><img src={deliveringImg} /></div>
                            <p>The next step after Ideation will be delivering all kinds of drawings including a map of your project to your home. Thereafter, we will deliver the designs to your doorstep through speed post without any further delays. These designs will help you to witness how the aspiration of your space will look after getting ready.</p>
                        </div>

                        <div className='how-it-works-steps how-we-works-steps'>
                            <h3>Site Supervision</h3>
                            <div className='works-steps-img'><img src={siteImg} /></div>
                            <p>Now last but not least, your project will be in-process, and meanwhile one of the dedicated engineers will do the site visit to ensure the right working plans for your project.</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default HowWeWork;
