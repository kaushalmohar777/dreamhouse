import './WhoWeAre.css';
import React from 'react';

class WhoWeAre extends React.Component {

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
                <section className='who-we-are-main'>
                    <div className='container-size'>
                        <div className='who-we-are-inner'>
                            <div className='who-we-are-left'>
                                <h3>{items.acf.who_we_are.title}</h3>
                                <p className='who-we-are-des'>{items.acf.who_we_are.description}</p>
                                <div className='who-we-are-counter'>
                                    <div className='who-we-counter-list'>
                                        <h3>{items.acf.who_we_are.project_completed_number}+</h3>
                                        <p>{items.acf.who_we_are.project_completed_title}</p>
                                    </div>
                                    <div className='who-we-counter-list'>
                                        <h3>{items.acf.who_we_are.service_since_year}</h3>
                                        <p>{items.acf.who_we_are.service_since_title}</p>
                                    </div>
                                    <div className='who-we-counter-list'>
                                        <h3>{items.acf.who_we_are.satisfied_client_number}+</h3>
                                        <p>{items.acf.who_we_are.satisfied_client_title}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='who-we-are-right'>
                                <div className='who-we-are-img'>
                                    <img src={items.acf.who_we_are.right_image} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            );
        }
    }
}

export default WhoWeAre;
