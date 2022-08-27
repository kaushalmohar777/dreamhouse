import './HomeSectionTwo.css';
import React from 'react';
import { Link } from "react-router-dom";

class HomeSectionTwo extends React.Component {

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
                <section className='home-section-two'>
                    <div className='container-size'>
                        <div className='home-section-two-inner'>

                            <div className='home-two-list'>
                                <Link to='/plans'>
                                    <div className='home-two-img'><img src={items.acf.second_section.icon_1} /></div>
                                    <p>{items.acf.second_section.title_1}</p>
                                </Link>
                            </div>
                            <div className='home-two-list'>
                                <Link to='/elevation'>
                                    <div className='home-two-img'><img src={items.acf.second_section.icon_2} /></div>
                                    <p>{items.acf.second_section.title_2}</p>
                                </Link>
                            </div>
                            <div className='home-two-list'>
                                <Link to='/interiors'>
                                    <div className='home-two-img'><img src={items.acf.second_section.icon_3} /></div>
                                    <p>{items.acf.second_section.title_3}</p>
                                </Link>
                            </div>
                            <div className='home-two-list'>
                                <Link to='/plans'>
                                    <div className='home-two-img'><img src={items.acf.second_section.icon_4} /></div>
                                    <p>{items.acf.second_section.title_4}</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            );
        }
    }
}

export default HomeSectionTwo;