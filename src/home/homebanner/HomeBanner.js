import './HomeBanner.css';
import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

class HomeBanner extends React.Component {
    
    state = {
        persons: []
    }
    componentDidMount() {
        axios.get(`https://dreamhousemakerz.com/production/index.php/wp-json/wp/v2/pages/10`)
            .then(res => {
                const persons = [res.data];
                this.setState({ persons });
            })
    }

    render() {
        return (
            <section className='home-banner-main'>
                <div className='home-banner-inner'>
                    {
                        this.state.persons
                            .map(person =>
                                <div key={person.id}>
                                    <p>{person.acf.banner_section.top_title}</p>
                                    <h1>{person.acf.banner_section.banner_title}</h1>
                                    <h2>{person.acf.banner_section.sub_title}</h2>
                                    <Link to="/contact">{person.acf.banner_section.button_title}</Link>
                                </div>
                            )
                    }
                </div>
            </section>
        )
    }


}

export default HomeBanner;