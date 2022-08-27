import React from 'react';
import './WhyToGo.css';
import Affordable from "./images/Affordable.jpg";
import Swift from "./images/SwiftServices.jpg";
import Accessible from "./images/duplex.png";
import Quality from "./images/Quality.png";


class WhyToGo extends React.Component {
    render() {
        return (
            <section className='whytogo-main'>
                <div className='whytogo-title'>
                    <h3>WHY TO GO FOR DREAM HOUSE MAKERZ?</h3>
                </div>
                <div className='container-size'>
                    <div className='whytogo-inner affordable-inner'>
                        <div className='whytogo-left'>
                            <div className='whytogo-img'><img src={Affordable} /></div>
                        </div>
                        <div className='whytogo-right'>
                            <div className='whytogo-content'>
                                <h3>Affordable/ Feasible Rate Card</h3>
                                <p>At Dream House Makerz, we understand how much it takes to fulfill a DREAM. Thus, we focus on turning your dream into a beautiful reality with budget-friendly prices. Our affordable price range will help you to live your dream with economic and sustainable designs and en ‘’Environments.</p>
                            </div>
                        </div>
                    </div>

                    <div className='whytogo-inner swift-inner'>
                        <div className='whytogo-left'>
                            <div className='whytogo-img'><img src={Swift} /></div>
                        </div>
                        <div className='whytogo-right'>
                            <div className='whytogo-content'>
                                <h3>Swift Services</h3>
                                <p>Delaying your dream project is surely a very bad idea. Thus, at Dream House Makerz we empathize on delivering you the best services in minimal time. Our quick services surely help us to complete your dream project within a given deadline.</p>
                            </div>
                        </div>
                    </div>

                    <div className='whytogo-inner accessible-inner'>
                        <div className='whytogo-left'>
                            <div className='whytogo-img'><img src={Accessible} /></div>
                        </div>
                        <div className='whytogo-right'>
                            <div className='whytogo-content'>
                                <h3>Accessible Way</h3>
                                <p>The team of experts at Dream House Makerz focuses on simplifying your work rather than complicating it with heavy stuffs. We work in the most simplest way in order to make our clients understand our working criteria and plans.</p>
                            </div>
                        </div>
                    </div>

                    <div className='whytogo-inner quality-inner'>
                        <div className='whytogo-left'>
                            <div className='whytogo-img'><img src={Quality} /></div>
                        </div>
                        <div className='whytogo-right'>
                            <div className='whytogo-content'>
                                <h3>Quality Assurance</h3>
                                <p>With the tagline ‘Aapka Ghar Aapki Pehchaan,’ we provide you the best quality work in every step for your dream project. For us, our client satisfaction and happiness is our prime responsibility. Thus, quality work is one of the biggest attributes for us to turn our clients into our long-term partners.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default WhyToGo;