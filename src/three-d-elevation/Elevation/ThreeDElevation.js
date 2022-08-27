import React from 'react';
import './ThreeDElevation.css';
import Affordable from "./images/Affordable.jpg";
import Swift from "./images/SwiftServices.jpg";
import Accessible from "./images/duplex.png";
import Quality from "./images/Quality.jpg";
import BirdView from "./images/BirdView.jpg";



class ThreeDElevation extends React.Component {
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
                                <h3>Who won’t love to look and feel at their ‘Dream House’ model?</h3>
                                <p>With our 3D Elevation model, you can actually visualize how amazing your space is going to look. 
                                    Just after the completion of your floor plan, we will prepare your 3D view to your imagination that will help you to feel and
                                     live your dream home before it gets ready.</p>
                                     <p>It will give you a realistic view of your imagination. With the help of our 
                                        3D elevations, you can connect with your place even more. So, Let your home exterior be the topic of talks amongst
                                         your near ones.</p>
                            </div>
                        </div>
                    </div>

                    <div className='whytogo-inner swift-inner'>
                        <div className='whytogo-left'>
                            <div className='whytogo-img'><img src={Swift} /></div>
                        </div>
                        <div className='whytogo-right'>
                            <div className='whytogo-content'>
                                <h3>Color Code</h3>
                                <p>Color creates a great impact on your day-to-day life schedules and tasks.</p>
                                <p>Thus, with a proper color expert team, we offer you the best color theme for your home that is 
                                    Vastu proof too for your lifestyle. We find the best-suited colors for you that will enhance the look of your home in a magnificent way.</p>
                            </div>
                        </div>
                    </div>

                    <div className='whytogo-inner accessible-inner'>
                        <div className='whytogo-left'>
                            <div className='whytogo-img'><img src={Accessible} /></div>
                        </div>
                        <div className='whytogo-right'>
                            <div className='whytogo-content'>
                                <h3>Material Details</h3>
                                <p>Dream House Makerz believes in giving you the best services with the best qualities. Thus, with high-quality material details,
                                     we assure you of the long-term protection of your home from the different elements.</p>
                                     <p>We understand the value of a dream. Thus, recommend the material details that are of superior quality.</p>
                            </div>
                        </div>
                    </div>

                    <div className='whytogo-inner quality-inner'>
                        <div className='whytogo-left'>
                            <div className='whytogo-img'><img src={Quality} /></div>
                        </div>
                        <div className='whytogo-right'>
                            <div className='whytogo-content'>
                                <h3>2D Working Details</h3>
                                <p>Not to forget, we will provide you the 2D working details that will help the contractor to execute the things well on site.</p> 
                                <p>The working details will include every little thing of the plan that how it is going to work and where it has 
                                    to be done and many more on-site.</p>                          
                             </div>
                        </div>
                    </div>


                    <div className='whytogo-inner accessible-inner'>
                        <div className='whytogo-left'>
                        <div className='whytogo-img'><img src={BirdView} /></div>
                        </div>
                        <div className='whytogo-right'>
                            <div className='whytogo-content'>
                                <h3>Bird-Eye View</h3>
                                <p>To give you the perfect look of your home, we will offer you the bird-eye view of your place.</p> 
                                <p>The top view helps you to look at the building with a bird-eye lens. Yes! You can check out how the structure of
                                     your place will look like from the sky-view.</p>                          
                             </div>
                        </div>
                    </div>

                   


                </div>
            </section>
        );
    }
}
export default ThreeDElevation;