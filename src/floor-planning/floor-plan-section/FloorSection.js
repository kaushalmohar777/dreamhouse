import React from 'react';
import './FloorSection.css'
import aboutImg from "./images/about.jpg";

class FloorSection extends React.Component {
    render() {
        return (
            <section className='about-us-section'>
                <div className='container-size'>
                    <div className='about-us-inner'>
                        <div className='heading-plan'>
                            <h2>FLOOR PLAN</h2>
                              <p>The floor plan is the basic structure of your success. We render the best floor plan services to you. 
                               Our expert team specializes in handling the raw data and modifying it in the best manner.</p>
                        </div>
                     </div>
                </div>
            </section>
        );
    }
}
export default FloorSection;