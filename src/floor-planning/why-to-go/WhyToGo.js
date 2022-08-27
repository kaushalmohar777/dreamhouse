import React from 'react';
import './WhyToGo.css';
import Affordable from "./images/Affordable.jpg";
import Swift from "./images/SwiftServices.png";
import Accessible from "./images/duplex.jpg";



class WhyToGo extends React.Component {
    render() {
        return (
            <section className='whytogo-main'>
                {/* <div className='whytogo-title'>
                    <h3>WHY TO GO FOR DREAM HOUSE MAKERZ?</h3>
                </div> */}
                <div className='container-size'>
                    <div className='whytogo-inner affordable-inner'>
                        <div className='whytogo-left'>
                            <div className='whytogo-img'><img src={Affordable} /></div>
                        </div>
                        <div className='whytogo-right'>
                            <div className='whytogo-content'>
                                <h3>Space Management</h3>
                            <p>Incredible space in your home requires an incredible map of space planning. One of the most
                                 crucial steps in designing your ‘The Perfect Home’ is space planning.</p>
                                 <p>The space planning organizes the space, furniture, and the other functions of the place systematically
                                     and effectively. With creative planning techniques, the experts crafts a proper map for the right space of your place.</p>
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

                    <div className='whytogo-inner accessible-inner py-cl'>
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

                </div>
            </section>
        );
    }
}
export default WhyToGo;