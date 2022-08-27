import './GetInTouch.css';
import React from 'react';
import leftImg from "./images/get-in-touch-img.jpg";

class GetInTouch extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        fetch('https://dreamhousemakerz.com/production/index.php/wp-json/wp/v2/pages/10/')
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
                <section className='get-in-touch-main'>
                    <div className='get-in-touch-img'>
                        <img src={items.acf.get_in_touch.left_image} />
                    </div>
                    <div className='get-in-touch-form'>

                       <h3>Get in touch</h3>
                       <p>Whether you're ready to sell residential, luxury, or land-we're ready to help get it done.</p>
                        <form>
                            <div className='col-md-6'>
                               <input type="email" className="form-control"  placeholder="Name"></input>
                            </div>
                            <div className='col-md-6'>
                               <input type="email" className="form-control"  placeholder="Your Mobile"></input>
                            </div>
                            <div className='col-md-12'>
                               <input type="email" className="form-control"  placeholder="Email"></input>
                            </div>
                            <div className='col-md-6'>
                                <select>
                                    <option>State</option>
                                    <option>Madhya Pradesh</option>
                                    <option>Maharashtra</option>
                                    <option>Andhra Pradesh</option>
                                </select>
                            </div>
                            <div className='col-md-6'>
                               <input type="email" className="form-control" placeholder="City"></input>
                            </div>
                            <div className='col-md-12'>
                               <textarea type="text" rows="4" className="form-control" placeholder="Requirment"></textarea>
                            </div>
                            <div className='col-md-12'>
                                <button type='button'>Search</button>
                            </div>


                        </form>

                    </div>
                </section>
            );
        }
    }
}


export default GetInTouch;
