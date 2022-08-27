import './HowItWorks.css';
import React from 'react';

class HowItWorks extends React.Component {

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
                <section className='how-it-works-main'>
                    <div className='how-it-works-top'>
                        <h3>{items.acf.how_it_works.how_it_works_title}</h3>
                    </div>
                    <div className='container-size'>
                        <div className='how-it-works-bottom'>
                            <div className='how-it-works-steps'>
                                <h3>{items.acf.how_it_works.step_1}</h3>
                                <div className='works-steps-img'><img src={items.acf.how_it_works.icon_1} /></div>
                                <p>{items.acf.how_it_works.step_1_title}</p>
                            </div>

                            <div className='how-it-works-steps'>
                                <h3>{items.acf.how_it_works.step_2}</h3>
                                <div className='works-steps-img'><img src={items.acf.how_it_works.icon_2} /></div>
                                <p>{items.acf.how_it_works.step_2_title}</p>
                            </div>

                            <div className='how-it-works-steps'>
                                <h3>{items.acf.how_it_works.step_3}</h3>
                                <div className='works-steps-img'><img src={items.acf.how_it_works.icon_3} /></div>
                                <p>{items.acf.how_it_works.step_3_title}</p>
                            </div>

                            <div className='how-it-works-steps'>
                                <h3>{items.acf.how_it_works.step_4}</h3>
                                <div className='works-steps-img'><img src={items.acf.how_it_works.icon_4} /></div>
                                <p>{items.acf.how_it_works.step_4_title}</p>
                            </div>

                            <div className='how-it-works-steps'>
                                <h3>{items.acf.how_it_works.step_5}</h3>
                                <div className='works-steps-img'><img src={items.acf.how_it_works.icon_5} /></div>
                                <p>{items.acf.how_it_works.step_5_title}</p>
                            </div>
                        </div>
                    </div>
                </section>
            );
        }
    }
}


export default HowItWorks;