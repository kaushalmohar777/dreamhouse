import React from 'react';
import './Counter.css';
import blueprint from "./images/blueprint.png";
import Elevation from "./images/Elevation.png";
import floor3d from "./images/floor-plan-3d.png";
import livingroom from "./images/living-room.png";

class Counter extends React.Component {
    render() {
        return (
            <section className='counter-section py-cl'>
                <div className='container-size'>
                    <div className='counter-inner'>
                        <div className='counter-box'>
                            <img src={Elevation} />
                            <h4>1000+</h4>
                              <p>Commercial Projects Done</p>
                        </div>

                        <div className='counter-box'>
                            <img src={blueprint} />
                            <h4>100+</h4>
                              <p>Cities Covered</p>
                        </div>

                        <div className='counter-box'>
                            <img src={floor3d} />
                            <h4>5000+</h4>
                              <p>Residential Projects Done</p>
                        </div>

                        <div className='counter-box'>
                            <img src={livingroom} />
                            <h4>4000+</h4>
                              <p>Happy Clients</p>
                        </div>
                     </div>
                </div>
            </section>
            
        );
    }
}
export default Counter;